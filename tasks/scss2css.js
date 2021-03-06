const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
//const uncss = require('postcss-uncss');
const concat = require('gulp-concat');

const bs = require('browser-sync');

module.exports = function scss2css() {
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
		/*uncss({
			html: './build/!**!/!*.html',
		}),*/
	];

	return src('app/assets/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('/sourcemaps/'))
		.pipe(dest('build/assets/css'));
};
