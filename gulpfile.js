var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('styles/main.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })

  // copy images/fonts/icons to app
  gulp.src('./static/**/*').pipe(gulp.dest('./app/static'));

  gulp.watch("./styles/**/*.scss", gulp.series(['sass']))
  gulp.watch("./styles/**/*.scss").on('change', browserSync.reload);
})
