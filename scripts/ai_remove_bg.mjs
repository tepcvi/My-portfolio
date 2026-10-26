import { removeBackground } from '@imgly/background-removal-node';
import { pathToFileURL } from 'url';
import fs from 'fs';

async function run() {
  console.log('1. Processing user selfie photo with AI background removal...');
  const userPhotoPath = 'd:\\Downloads\\portfolio\\public\\assets\\img\\user-profile.png';
  const outHero = 'd:\\Downloads\\portfolio\\public\\assets\\img\\user-selfie-cutout.png';
  
  try {
    const fileUrl1 = pathToFileURL(userPhotoPath).href;
    console.log('Using file URL:', fileUrl1);
    const blob1 = await removeBackground(fileUrl1);
    const buffer1 = Buffer.from(await blob1.arrayBuffer());
    fs.writeFileSync(outHero, buffer1);
    console.log('Successfully created user-selfie-cutout.png, size:', buffer1.length);
  } catch (e) {
    console.error('Error on user photo:', e);
  }

  console.log('2. Processing studio portrait with AI background removal...');
  const studioPath = 'C:\\Users\\Tep\\.gemini\\antigravity-ide\\brain\\2d0a5cf4-6d05-4db1-b593-ac3d9dbf202f\\user_hero_portrait_1793033984355.jpg';
  const outStudio = 'd:\\Downloads\\portfolio\\public\\assets\\img\\user-studio-cutout.png';
  
  try {
    const fileUrl2 = pathToFileURL(studioPath).href;
    console.log('Using file URL:', fileUrl2);
    const blob2 = await removeBackground(fileUrl2);
    const buffer2 = Buffer.from(await blob2.arrayBuffer());
    fs.writeFileSync(outStudio, buffer2);
    console.log('Successfully created user-studio-cutout.png, size:', buffer2.length);
  } catch (e) {
    console.error('Error on studio portrait:', e);
  }
}

run().catch(console.error);
