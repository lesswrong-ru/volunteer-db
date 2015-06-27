var nodemon = require('nodemon');
var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack/config');
var path = require('path');

// via https://github.com/jlongster/backend-with-webpack/blob/part2b/gulpfile.js
function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('backend-build', function (done) {
  webpack(webpackConfig).run(onBuild(done));
});
gulp.task('backend-watch', function () {
  webpack(webpackConfig).watch(100, function (err, stats) {
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('watch', ['backend-watch']);

gulp.task('run', ['watch'], function () {
  // via http://jlongster.com/Backend-Apps-with-Webpack--Part-II#Nodemon
  nodemon({
    execMap: {
      js: 'node',
    },
    script: path.join(__dirname, 'build/server'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop',
  });
});

gulp.task('default', ['run']);
