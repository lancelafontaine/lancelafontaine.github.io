(() => {
  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  const htmlmin =  require('gulp-htmlmin');
  const autoprefixer = require('gulp-autoprefixer');
  const cssmin = require('gulp-clean-css');
  const watch = require('gulp-watch');
  const plumber = require('gulp-plumber');
  const connect = require('gulp-connect');
  const sass = require('gulp-sass');
  const rename = require('gulp-rename');
  const rollup = require('rollup-stream');
  const source = require('vinyl-source-stream');
  const uglify = require('gulp-uglify');
  const buffer = require('vinyl-buffer')

  gulp.task('default', () => {
    runSequence(['html', 'css', 'js'], ['server', 'watch']);
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
    gulp.src('src/scss/import.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['> 1%'],
          cascade: false
      }))
      .pipe(cssmin({
        compatibility: 'ie8'
      }))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('.'));
  });

  gulp.task('js', () => {
    return rollup({
        entry: './src/js/main.js'
      })
      .pipe(source('main.js'))
      .pipe(plumber())
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('.'));
  });

  gulp.task('server', () => {
    connect.server({
      root: '.',
      livereload: false
    });
  });

  gulp.task('watch', () => {
    watch('src/html/*.html', () => {
      gulp.start('html');

    });
    watch('src/scss/*.scss', () => {
        gulp.start('css');
    });
    watch('src/js/*.js', () => {
        gulp.start('js');
    });
  });

})();
