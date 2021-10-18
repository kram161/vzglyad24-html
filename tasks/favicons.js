const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');

module.exports = function favicons() {
	return src('app/assets/img/favicons/*').pipe(plumber()).pipe(dest('build/assets/img/favicons'));
};
