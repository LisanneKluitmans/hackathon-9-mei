/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: './', // 'Current Working Directory'
					src: 'index.html', // Read everything inside the cwd
					dest: 'toZip/' // Destination folder
				},
					{
						expand: true,
						cwd: 'source-files/', // 'Current Working Directory'
						src: ['**', '!**.scss'], // Read everything inside the cwd
						dest: 'toZip/assets' // Destination folder
					}]
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'source-files/',
					src: ['*.scss'],
					dest: 'toZip/assets',
					ext: '.css'
				}]
			}
		},
		compress: {
			main: {
				options: {
					archive: 'lisanne.zip'
				},
				expand: true,
				cwd: 'toZip',
				src: ['**'],
				dest: './'
			}
		}
	});

	// Load tasks here.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compress');


	// Define aliases here.
	grunt.registerTask('default', [ 'copy', 'sass', 'compress' ] );

};
