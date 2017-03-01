'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
var injectString = require('gulp-inject-string');
var wait = require('gulp-wait');


var buildSrc = './dist/';   //the web app build files from where the files should be copied
var mobDest = './mobile/www/';  // the destination where the build files have to be copied to.



gulp.task('mobile', ['copyApp','copyFolders'], function() {
  console.log('---->Mobile<------');
      gulp.src(buildSrc + '*.html')
        .pipe(wait(1000))
        .pipe(injectString.before('<script', '<script src="cordova.js"></script>\n'))
        .pipe(gulp.dest(mobDest));
});

gulp.task('copyApp', function () {
  gulp.src(buildSrc + 'app/**')
  .pipe(gulp.dest(mobDest));
});

gulp.task('copyFolders', function () {
  gulp.src([buildSrc + '**',buildSrc + '!app/**'])
  .pipe(gulp.dest(mobDest));
});

gulp.task('mobileClean', [], function() {
  console.log('---->Cleaning mob<------');
  return $.del([mobDest+'**/**.**',mobDest+'**/**']);
});