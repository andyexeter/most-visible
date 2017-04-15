module.exports = {
	js: {
		files: [ 'src/**/*.js' ],
		tasks: [
			'jshint:dist',
			'includes:dist',
			'uglify:dist'
		]
	}
};
