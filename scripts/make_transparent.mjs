import sharp from 'sharp';
import fs from 'fs';

async function processCutout() {
  const inputPath = 'C:\\Users\\Tep\\.gemini\\antigravity-ide\\brain\\2d0a5cf4-6d05-4db1-b593-ac3d9dbf202f\\user_hero_portrait_1793033984355.jpg';
  const outputPath = 'd:\\Downloads\\portfolio\\public\\assets\\img\\user-hero.png';
  const aboutOutputPath = 'd:\\Downloads\\portfolio\\public\\assets\\img\\user-about.png';

  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // data is RGBA buffer: width * height * 4
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Threshold for background black pixels:
  // Background in user_hero_portrait is pure black (RGB ~ 1, 1, 1 to 15, 15, 15)
  const isBg = (idx) => {
    const r = data[idx * 4];
    const g = data[idx * 4 + 1];
    const b = data[idx * 4 + 2];
    // Background is near black, purple glow has higher b/r
    return r < 18 && g < 18 && b < 24;
  };

  // Push border pixels
  for (let x = 0; x < width; x++) {
    queue.push(x); // top row
    visited[x] = 1;
  }
  for (let y = 0; y < height; y++) {
    const idxL = y * width;
    const idxR = y * width + (width - 1);
    if (!visited[idxL]) { queue.push(idxL); visited[idxL] = 1; }
    if (!visited[idxR]) { queue.push(idxR); visited[idxR] = 1; }
  }

  // BFS
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // Make this pixel transparent
    data[curr * 4 + 3] = 0;

    // Check 4 neighbors
    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n] && isBg(n)) {
        visited[n] = 1;
        queue.push(n);
      }
    }
  }

  console.log(`Flood filled ${queue.length} background pixels.`);

  // Apply subtle anti-aliasing feathering to borders
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (data[idx * 4 + 3] > 0) {
        // check if neighbor is transparent
        const hasTransparentNeighbor =
          data[(idx - 1) * 4 + 3] === 0 ||
          data[(idx + 1) * 4 + 3] === 0 ||
          data[(idx - width) * 4 + 3] === 0 ||
          data[(idx + width) * 4 + 3] === 0;

        if (hasTransparentNeighbor) {
          const r = data[idx * 4];
          const g = data[idx * 4 + 1];
          const b = data[idx * 4 + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (lum < 35) {
            data[idx * 4 + 3] = Math.round((lum / 35) * 200);
          }
        }
      }
    }
  }

  // Save hero portrait
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Saved transparent hero cutout to:', outputPath);

  // Also create about section version (scaled to 500x500 aspect ratio)
  await sharp(outputPath)
    .resize(500, null, { fit: 'inside' })
    .toFile(aboutOutputPath);

  console.log('Saved about cutout to:', aboutOutputPath);
}

processCutout().catch(console.error);
