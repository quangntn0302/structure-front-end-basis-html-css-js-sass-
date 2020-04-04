const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

// compile SCSS to CSS
function style () {
  // 1. where is my scss file
  return gulp.src('./scss/**/*.scss')
  // 2. pass that file through SASS compiler
    .pipe(sass())
  // 3. where do I save the compile CSS
    .pipe(gulp.dest('./../public/css'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream())
}

function watch () {
  browserSync.init({
    server: {
      baseDir: '../public'
    }
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./../public/*.html').on('change', browserSync.reload)
  gulp.watch('./scss/**/*.scss').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
