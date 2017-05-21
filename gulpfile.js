"use strict";

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    browserSync  = require('browser-sync'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

//
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dest'
        },
        notify: false
    });
});
// html
gulp.task('html', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dest'))
  .pipe(browserSync.reload({stream: true}));
});

// scss
gulp.task('scss', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 25 versions'))
    .pipe(cleanCSS())
    // .pipe(rename("style.min.css"))
    .pipe(gulp.dest('dest/css'))
    .pipe(browserSync.reload({stream: true}));
});

// scripts
gulp.task('scripts', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    .pipe(browserSync.reload({stream: true}));

});

// images
gulp.task('images', function() {
  return gulp.src('app/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))
    .pipe(browserSync.reload({stream: true}));
});

// fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dest/fonts'));
});

//video
gulp.task('video', function() {
  return gulp.src('app/video/*')
    .pipe(gulp.dest('dest/video'));
});
// watcher
gulp.task('watch',['browser-sync'], function () {
    gulp.watch('app/scss/**/*', ['scss'])
    gulp.watch('app/js/*', ['scripts'])
    gulp.watch('app/*.html', ['html']);

});

// default
gulp.task('default', ['video', 'images','fonts', 'scripts', 'scss', 'html']);
