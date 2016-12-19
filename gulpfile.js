(() => {
  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  const htmlmin =  require('gulp-htmlmin');
  const autoprefixer = require('gulp-autoprefixer');
  const cssmin = require('gulp-clean-css');
  const watch = require('gulp-watch');
  const plumber = require('gulp-plumber');
  const connect = require('gulp-connect');
  const concat = require('gulp-concat');

  gulp.task('default', () => {
    runSequence(['html', 'css'], ['server', 'watch']);
  });

  gulp.task('html', () => {
    return gulp.src('src/html/index.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('.'));
  });

  gulp.task('css', () => {
    gulp.src('src/scss/*.scss')
      .pipe(concat('style.min.css'))
      .pipe(plumber())
      .pipe(autoprefixer({
        browsers: ['> 1%'],
          cascade: false
      }))
      .pipe(cssmin({
        compatibility: 'ie8'
      }))
      .pipe(gulp.dest('.'));
  });

  gulp.task('server', () => {
    connect.server({
      root: '.',
      livereload: true
    });
  });

  gulp.task('watch', () => {
    watch('**/*.html', () => {
      gulp.start('html');

    });
    watch('**/*.scss', () => {
        gulp.start('css');
    });


  });


})();
