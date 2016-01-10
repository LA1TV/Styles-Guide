var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    server = require('gulp-server-livereload'),
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

gulp.task('templates', function() {
    return gulp.src('assets/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('webserver', function() {
    gulp.src('./public')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch(['assets/sass/*.scss', 'assets/sass/**/*.scss'], ['styles']);
    gulp.watch(['assets/jade/*.jade', 'assets/jade/**/*.jade'], ['templates']);
});

gulp.task('default', ['styles', 'templates', 'watch', 'webserver']);
gulp.task('deploy', ['styles', 'templates']);
