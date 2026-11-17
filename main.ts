const fs = require('fs'); const path = require('path');

function copyLaunchJson(src, dest) {
  const srcDir = path.dirname(src);
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? '.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyLaunchJson(botDir + '/LAUNCH.json', outputDir + '/LAUNCH.json');



void 0; //('LAUNCH.json copied successfully\n');
