const copyFileSync = require('fs').copyFileSync;
const mkdirSync = require('fs').mkdirSync;
const join = require('path').join;

const helperCopyFile = (src, dest) => {
  try {
    mkdirSync(dest, {recursive: true});
    copyFileSync(join(src, 'LAUNCH.json'), join(dest, 'LAUNCH.json'));
  } catch (err) {
    console.error(`Failed to copy LAUNCH.json from ${src} to ${dest}: ${err.message}`);
    process.exit(1);
  }
};

const rootDir = process.cwd();
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

helperCopyFile(rootDir, outputDir);

console.log('LAUNCH.json copied to output directory.');