var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass',function(){
    gulp.src('./Scss/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: './Styles',
            sass: './Scss'
        }));
});
gulp.task('Watch', function () {
    gulp.watch("./Scss/**/*.scss", ['compass']);
});

var browserSync = require('browser-sync').create();
gulp.task('Run-Browser-Sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});