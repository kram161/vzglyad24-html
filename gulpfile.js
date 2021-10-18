const { task, series, parallel } = require('gulp');

const pug2html = require('./tasks/pug2html');
const scss2css_prod = require('./tasks/scss2css_prod');
const scss2css = require('./tasks/scss2css');
const scripts = require('./tasks/scripts');
const fonts = require('./tasks/fonts');
const static = require('./tasks/static');
const favicons = require('./tasks/favicons');
const images = require('./tasks/images');
const clean = require('./tasks/clean');
const serve = require('./tasks/serve');

const dev = series(pug2html, scss2css, scripts, fonts, images);
const prod = series(pug2html, scss2css_prod, scripts, fonts, static, favicons, images);

task('serve', series(serve));

task('start', series(dev, serve));
task('start:clean', series(clean, dev, serve));

task('compile:prod', series(clean, prod));
task('compile:dev', series(clean, dev));

task('useref', scripts);
task('imagemin', images);

task('clean', clean);