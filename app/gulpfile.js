const { series } = require('gulp');
const fs = require("fs")
const path = require("path")
const childProc = require('child_process');

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
	if (!fs.existsSync(dest)) fs.mkdirSync(dest);
	
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

function copyBuildFiles(cb) {
  
  copyRecursiveSync('build', '../')
  
  cb();
}

function commitWebPage(cb) {
	
	childProc.execSync("git add .. && git commit -m 'Update'");
	
	cb();
}

exports.default = series(copyBuildFiles, commitWebPage);