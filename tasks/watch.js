'use strict';

var gulp = require('gulp');

function watchTask(options){
  gulp.task('watch', ['dupe', 'build'], function(){
    gulp.watch(
      [
        options.source + '/**/*.html',
        options.source + '/**/*.css',
        options.source + '/**/*.scss',
        options.source + '/**/*.less',
        options.source + '/**/conf.json'
      ],
      ['dupe', 'less', 'sass', 'postcss', 'build']
    );
  });
}

module.exports = watchTask;
