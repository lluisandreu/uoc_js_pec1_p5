module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		  options: {
		    // define a string to put between each file in the concatenated output
		    separator: ';'
		  },
		  dist: {
		    // the files to concatenate
		    src: ['src/**/*.js'],
		    // the location of the resulting JS file
		    dest: 'dist/js/script.js'
		  }
		},
		uglify: {
			options: {
				sourceMap: true
			},
	      my_target: {
	        files: {
	          'dist/js/script.min.js': ['src/js/vendor/*.js', 'src/js/*.js']
	        }
	      }
	    },
		jshint: {
		  files: ['Gruntfile.js', 'src/**/*.js'],
		  options: {
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},
		imagemin: {
		    jpgs: {
		        options: {
		            progressive: true
		        },
		        files: [{
		            expand: true,
		            cwd: 'src/images',
		            src: ['*.jpg'],
		            dest: 'dist/img/'
		        }]
		    }
		},
		compass: {
			dist: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'dist/css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            },
		},
		browserSync: {
		    files: ["dist/css/*.css", "dist/js/*.js"],
		    options: {
		    	watchTask: true,
		        server: {
		            baseDir: "./dist",
		            index: "index.html"
		        }
		    }
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['watch', 'jshint', 'concat', 'uglify', 'imagemin', 'browserSync']);
};