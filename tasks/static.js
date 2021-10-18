const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');

module.exports = function static() {
	return src(['app/assets/static/*', '!app/assets/static/.gitkeep'])
		.pipe(plumber())
		.pipe(dest('build'));
};
