module.exports = function(grunt) {

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      banner: '/*!\n' +
      ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2009-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' */\n',

      jekyll: {
         options: {
            bundleExec: true
         },
         serve: {
            options: {
               serve: true,
               dest: '_site',
               drafts: true,
               future: true
            }
         }
      },
      concat: {
         options: {
            separator: '\n',
            banner: '<%= banner %>',
         },
         css: {
            src: ['css/built-bootstrap+<%= pkg.name %>.css'
                  ],
            dest: 'dist/css/<%= pkg.distPrefix %>.css'
         },
         js: {
            src: [//'bower_components/jquery/dist/jquery.min.js',
                  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                  'bower_components/is_js/is.min.js',
                  // 'bower_components/particles.js/particles.min.js',
                  'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
                  'bower_components/jquery.fitvids/jquery.fitvids.js',
                  'bower_components/anchor-js/anchor.js',
                  'js/<%= pkg.name %>.js'],
            dest: 'dist/js/<%= pkg.distPrefix %>.js'
         }
      },
      cssmin: {
         dist: {
            files: {
               'dist/css/<%= pkg.distPrefix %>.min.css': ['dist/css/<%= pkg.distPrefix %>.css']
            }
         }
      },
      uglify: {
         dist: {
            files: {
               'dist/js/<%= pkg.distPrefix %>.min.js': ['dist/js/<%= pkg.distPrefix %>.js']
            }
         }
      },
      watch: {
         options: {
            livereload: true
         },
         css:{
            files: ['css/less/**'],
            tasks: ['css']
         },
         js:{
            files: ['js/**'],
            tasks: ['js']
         }
      },
      autoprefixer: {
        options: {
            browsers: ['> 5%']
         },
         // prefix all files
         normal: {
            expand: true,
            flatten: true,
            src: 'dist/css/*.css',
            dest: 'dist/css/'
         }
      },
      copy: {
         bootstrap: {
            src: '**',
            cwd: 'node_modules/bootstrap/scss/',
            dest: '_sass/bootstrap/',
            expand: true
         },
         bootstrapVariables: {
            src: '_sass/bootstrap/_variables.scss',
            dest: '_sass/_variables.scss'
         }
      }
      // clean: {
      //    dist: ["dist/*"],
      //    cleanup: ['dist', 'bower_components', 'node_modules', 'includes/ui/README.html'],
      //    preBuild: ['css/built-*']
      // },
      // 'sftp-deploy': {
      //    deploy: {
      //       auth: {
      //          host: '<%= pkg.url %>',
      //          port: 22,
      //          authKey: 'key1'
      //       },
      //       src: '../ROOTFOLDER',
      //       dest: '/SERVERLOCATION',
      //       exclusions: [
      //          'bower_components',
      //          'node_modules',
      //          '.DS_Store',
      //          '.gitignore',
      //          '.git',
      //          '.*',
      //          'img',
      //          'fonts',
      //       ],
      //       progress: true
      //    },
      //    img: {
      //       auth: {
      //          host: '<%= pkg.url %>',
      //          port: 22,
      //          authKey: 'key1'
      //       },
      //       src: '../ROOTFOLDER/img',
      //       dest: '/SERVERLOCATION/img',
      //       exclusions: ['.DS_Store'],
      //       progress: true
      //    },
      //    js: {
      //       auth: {
      //          host: '<%= pkg.url %>',
      //          port: 22,
      //          authKey: 'key1'
      //       },
      //       src: '../ROOTFOLDER/dist/js',
      //       dest: '/SERVERLOCATION/dist/js',
      //       exclusions: ['.DS_Store'],
      //       progress: true
      //    }
      // }
   });

   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-text-replace');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-jekyll');

   // Utility runners
   grunt.registerTask('cleanup', ['clean:cleanup']);
   grunt.registerTask('setup', ['copy']);

   // Slim task runners
   grunt.registerTask('default', ['jekyll']);

   // Production ready task runners
   grunt.registerTask('deploy', ['sftp-deploy:deploy']);

};
