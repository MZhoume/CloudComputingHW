const gulp = require('gulp');
const typescript = require('gulp-typescript');
const del = require('del');
const ebDeploy = require('gulp-elasticbeanstalk-deploy');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    src: ['src/**/*.ts', '!src/interface', '!src/interface/**'],
    clean: ['dist/**', '!dist', '!dist/package.json', '!dist/node_modules', '!dist/node_modules/**'],
    dist: './dist/',
    app: ['dist/**']
};

gulp.task('default', ['build']);

gulp.task('clean', function () {
    return del(paths.clean);
});

gulp.task('build', ['clean'], function () {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(typescript({
            target: 'ES6',
            module: 'CommonJS'
        }))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('deploy', ['build'], function () {
    return gulp.src(paths.app)
        .pipe(ebDeploy({
            timestamp: true,
            waitForDeploy: true,
            amazon: {
                region: 'us-east-1',
                bucket: 'cc-hw-bucket',
                applicationName: 'ccHomework',
                environmentName: 'Sample-env-1'
            }
        }));
});

gulp.task('watch', function () {
    gulp.watch(paths.src, ['build']);
});
