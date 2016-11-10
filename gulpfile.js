//gulpfile written in ES5 spec to retrofit older nodejs versions
//gulp-babel docs: https://www.npmjs.com/package/gulp-babel

var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    watch = require("gulp-watch");

// configure src path (ES6) and destination path (ES5) of files to be used in build and watch tasks
var srcPath =  'src/script.js',
    destPath = 'dist';

//the build task
gulp.task('build', function() {
  return gulp.src(srcPath) // defines input src of ES6 code
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(destPath)); // defines output src of ES5 code
});

//the watch task
gulp.task('watch', function() {
  //their could be more watchers here
  gulp.watch(srcPath, ['build'])
});

gulp.task('webserver', function() {
  connect.server({
    root: ['.', '.tmp']
  });
});

// default gulp task(s)
gulp.task('default', ['build', 'webserver', 'watch']);
