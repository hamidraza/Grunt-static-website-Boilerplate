module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/pack.min.css': 'sass/style.scss',
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'js/script.js': 'coffee/script.coffee'
        }
      }
    },
    uglify: {
      compress: {
        options: {
          sourceMap: true
        },
        files: {
          'js/pack.min.js': ['js/lib/jquery.js', 'js/script.js']
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": "jade/home.jade"
        }
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: '**/*.coffee',
        tasks: ['coffee', 'uglify']
      },
      html: {
        files: '**/*.jade',
        tasks: ['jade']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('prod', ['sass', 'coffee', 'uglify', 'jade']);
}
