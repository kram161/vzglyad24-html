const { src, dest } = require('gulp');

module.exports = function fonts() {
	return src(['app/assets/fonts/*', '!app/assets/fonts/.gitkeep']).pipe(dest('build/assets/fonts'));
};
