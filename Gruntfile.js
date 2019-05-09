/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
	  copy: {
		  main: {
			  files: [{
				  expand: true,
				  cwd: 'source-files/', // 'Current Working Directory'
				  src: ['**/vendor/**', 'classes/**', '!**.scss', '!**.js'], // Read everything inside the cwd
				  dest: 'toZip/assets' // Destination folder
			  }]
		  }
	  },
	  babel: {
		  options: {
			  sourceMap: true,
			  presets: ['@babel/preset-env']
		  },
		  dist: {
			  files: [{
				  expand: true,
				  cwd: 'source-files/js',
				  src: ['**/*.js', '!**/vendor/**'],
				  dest: 'toZip/assets/js'
			  }]
		  }
	  },
	  uglify: {
		  my_target: {
			  files: [{
				  expand: true,
				  cwd: 'toZip/assets/js',
				  src: ['**/*.js', '!**/vendor/**'],
				  dest: 'toZip/assets/js'
			  }]
		  }
	  },
	  sass: {
		  dist: {
			  files: [{
				  expand: true,
				  cwd: 'source-files/css',
				  src: ['*.scss'],
				  dest: 'toZip/assets/css',
				  ext: '.css'
			  }]
		  }
	  },
  });

  // Load tasks here.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-sass');

  // Define aliases here.
  grunt.registerTask('default', 'My default task description', function() {
    grunt.log.writeln( 'This is the default grunt task, create a new task and configure.' );
  });

	grunt.registerTask('build', [ 'copy', 'babel', 'uglify', 'sass' ] );
};
