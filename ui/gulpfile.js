// ui/gulpfile.js

var gulp = require('gulp');
var BuildTask = require('carbon-factory/lib/gulp/build').default;
var SpecTask = require('carbon-factory/lib/gulp/spec').default;

var opts = {
  jsDest: './../app/assets/javascripts',
  cssDest: './../app/assets/stylesheets',
  fontDest: './../app/assets/fonts/fonts'
};

gulp.task('default', BuildTask(opts)); // <-- Pass options here

gulp.task('test', SpecTask());
