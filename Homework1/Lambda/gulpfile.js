var gulp = require('gulp');
var typescript = require('gulp-typescript');
var del = require('del');
var zip = require('gulp-zip');
var lambda = require('gulp-lambda-deploy');

let params = {
    name: 'ccLambda',
    role: 'arn:aws:iam::694994407665:role/ccLambdaRole'
};

let options = {
    profile: 'default',
    region: 'us-east-1'
};

var paths = {
    src: ['src/**/*.ts', '!src/interface', '!src/interface/**'],
    clean: ['dist/**', '!dist', '!dist/package.json', '!dist/node_modules', '!dist/node_modules/**'],
    dist: 'dist/',
    zip: ['dist/**']
};

gulp.task('default', ['build']);

gulp.task('clean', function () {
    return del(paths.clean);
});

gulp.task('build', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(typescript({
            target: 'ES6',
            module: 'CommonJS'
        }))
        .js
        .pipe(gulp.dest(paths.dist));
});

gulp.task('zip', ['build'], function () {
    return gulp.src(paths.zip)
        .pipe(zip('lambda.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('upload', ['zip'], function () {
    return gulp.src('./lambda.zip')
        .pipe(lambda(params, options));
});

gulp.task('deploy', ['upload'], function () {});

gulp.task('watch', function () {
    gulp.watch(paths.src, ['build']);
});
