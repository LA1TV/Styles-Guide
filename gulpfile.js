var gulp = require('gulp'),
    sass = require('gulp-sass'),
    normalize = require('node-normalize-scss').includePaths,
    neat = require('node-neat').includePaths,
    bourbon = require('node-bourbon').includePaths;

gulp.task('styles', function () {
    return gulp.src('./assets/sass/app.scss')
        .pipe(sass({
            includePaths: [].concat(normalize, bourbon, neat),
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch(['assets/sass/*.scss', 'assets/sass/**/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);
gulp.task('deploy', ['styles']);
