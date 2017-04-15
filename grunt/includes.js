module.exports = {
	dist: {
		options: {
			includeRegexp: /^(\s*)\/\/\s*include\s+['"]?([^'"]+)['"]?\s*$/,
			banner: '/**\n' +
			' * <%= pkg.title %> v<%= pkg.version %>\n' +
			' *\n' +
			' * @author <%= pkg.author %>\n' +
			' * @license <%= pkg.license %>\n' +
			' */\n'
		},
		src: '<%= files.boilerplate %>',
		dest: '<%= files.main %>'
	}
};
