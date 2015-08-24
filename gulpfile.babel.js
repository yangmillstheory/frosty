import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';


let [SRC, DST] = ['src', '.'];

gulp.task('build', () => {
  return gulp.src([`${SRC}/**/*.js`, `!${SRC}/**/*.spec.js`])
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(DST))
});


gulp.task('default', gulp.series('build'));