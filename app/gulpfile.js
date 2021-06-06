const { task, series, src, dest } = require('gulp');
const fs = require("fs")
const path = require("path")
const childProc = require('child_process');

function copyBuildFiles(cb) {
  
  //copyRecursiveSync('build', '../')
  
  src('build/**').pipe(dest('../'));
  
  cb();
}

function publish(cb) {
	
	childProc.execSync("git add .. && git commit -m 'Update' && git push");
	
	cb();
}

exports.copyBuildFiles = copyBuildFiles;
exports.publish = publish;
exports.default = series(copyBuildFiles, publish);