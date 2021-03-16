var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
gulp.task('sass', function() {
  return gulp.src('styles/main.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(livereload())
})

gulp.task('html', function() {
  return gulp.src('/*.html')
      .pipe(livereload(server))
});

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series(['sass'])); 
  // Other watchers
})