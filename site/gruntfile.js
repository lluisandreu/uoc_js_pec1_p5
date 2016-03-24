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
		  files: ['Gruntfile.js', 'src/js/*.js'],
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
			scss: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			scripts: {
                files: ['src/js/*.js'],
                tasks: ['uglify', 'jshint']
            },
		},
		browserSync: {
		    dev: {
		        bsFiles: {
		            src : 'dist/css/styles.css'
		        },
		        options: {
		        	watchTask: true,
		            proxy: "paam/uoc_js/pec1/site/dist/"
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