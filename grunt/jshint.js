module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	src: {
		src: 'src/**/*.js'
	},
	dist: {
		src: '<%= files.main %>'
	},
	grunt: {
		options: {
			node: true
		},
		src: 'Gruntfile.js'
	}
};
