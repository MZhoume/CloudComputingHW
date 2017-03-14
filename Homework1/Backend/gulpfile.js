const gulp = require('gulp');
const del = require('del');
const zip = require('gulp-zip');

const paths = {
    clean: ['dist/**', '!dist', '!dist/package.json', '!dist/node_modules', '!dist/node_modules/**', '!dist/www', '!dist/www/**'],
    dist: ['dist/**']
};

gulp.task('clean', function () {
    return del(paths.clean);
});

gulp.task('zip', function () {
    return gulp.src(paths.dist)
        .pipe(zip('app.zip'))
        .pipe(gulp.dest('../ElasticBeanstalk/'));
});
