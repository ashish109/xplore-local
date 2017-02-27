'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

// just as indication
gulp.task('lint', function () {
    gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};
