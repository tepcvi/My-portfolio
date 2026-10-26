import sharp from 'sharp';

async function check() {
  const image = sharp('C:\\Users\\Tep\\.gemini\\antigravity-ide\\brain\\2d0a5cf4-6d05-4db1-b593-ac3d9dbf202f\\user_hero_portrait_1793033984355.jpg');
  const metadata = await image.metadata();
  console.log('Metadata format:', metadata.format, metadata.width, metadata.height);

  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  console.log('Top-left RGB:', data[0], data[1], data[2]);
}

check().catch(console.error);
