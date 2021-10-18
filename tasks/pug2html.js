const { src, dest } = require('gulp');

const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
const plumber = require('gulp-plumber');

module.exports = function pug2html() {
	return src('app/views/pages/**/*.pug')
		.pipe(plumber())
		.pipe(pugLinter({ reporter: 'default' }))
		.pipe(pug())
		.pipe(dest('build'));
};
