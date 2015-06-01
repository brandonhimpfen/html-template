module.exports = function(grunt) {

  grunt.initConfig({

    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass
    sass: {
      options: {
        sourceMap: true,
        sourceComments: false
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },

    // Minify compiled CSS
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },

    sitemap: {
      dist: {
        pattern: ['**/*.html', '!**/40*.html', '!**/50*.html', '!**/node_modules/**']
      }
    },

    // Watch and build
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass', 'cssmin', 'parker']
      }
    }

  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sitemap');

  // Run tasks
  grunt.registerTask('default', ['sass', 'cssmin', 'sitemap']);

};
