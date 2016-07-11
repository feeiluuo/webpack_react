/*
gulp配置文件  

gulp-webserver  gulp-mock-server

 */

var gulp = require('gulp');
var mockServer = require('gulp-mock-server');


gulp.task('mock', function() {
  gulp.src('.')
    .pipe(mockServer({
      livereload: false,
      directoryListing: true,
      port: 8090,
      open: true
    }));
});
