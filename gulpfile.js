'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    plumber = require('gulp-plumber');

var options = {
  source: 'templates',
  dist: 'dist',
  workingDir: 'tmp',
  src: function plumbedSrc(){
    return gulp
      .src
      .apply(gulp, arguments)
      .pipe(plumber());
  }
};

/** Load tasks from the '/tasks' directory.
 * Look for .js & .coffee files.
 * Each file should correspond to a task.
 */
fs
  .readdirSync('./tasks')
  .filter(function readJSFiles(file) {
    return (/\.(js|coffee)$/i).test(file);
  })
  .map(function loadTasks(file) {
    require('./tasks/' + file)(options);
  });

/** By default templates will be built into '/dist', then gulp will watch for changes in '/src'. */
gulp.task(
  'default', 
  [
    'dupe', 
    'less',
    'sass',
    'postcss',
    'lint',
    'build'
  ]
);
