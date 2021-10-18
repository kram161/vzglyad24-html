const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const eslint = require('gulp-eslint');

module.exports = function script() {
	return src('app/scripts/**/*.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(
			webpack({
				mode: 'production',
				output: {
					filename: 'main.min.js',
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
								},
							},
						},
					],
				},
				plugins: [new CircularDependencyPlugin(), new DuplicatePackageCheckerPlugin()],
			}),
		)
		.pipe(sourcemaps.write('/sourcemaps/'))
		.pipe(dest('build/assets/scripts'));
};
