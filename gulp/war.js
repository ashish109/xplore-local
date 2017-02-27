'use strict';

var gulp = require('gulp');
var war = require('gulp-war');
var zip = require('gulp-zip');
var conf = require('./conf');


gulp.task('war', ['clean','build'],function () {
    gulp.src([conf.paths.dist+'/**/*'])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'skpbestqualityui',
        }))
        .pipe(zip('skp.war'))
        .pipe(gulp.dest("./war"));
 
});
