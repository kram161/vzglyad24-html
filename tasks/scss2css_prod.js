const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uncss = require('postcss-uncss');
const concat = require('gulp-concat');

module.exports = function scss2css_prod() {
	var plugins = [
		autoprefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}),
		uncss({
			html: './build/**/*.html',
		}),
	];

	return src('app/assets/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(postcss(plugins))
		.pipe(dest('build/assets/css'));
};
