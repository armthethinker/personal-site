module.exports = function(grunt) {

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      banner: '/*!\n' +
      ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2009-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' */\n',
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
      uglify: {
         dist: {
            files: {
               'dist/js/<%= pkg.distPrefix %>.min.js': ['dist/js/<%= pkg.distPrefix %>.js']
            }
         }
      },
      cssmin: {
         dist: {
            files: {
               'dist/css/<%= pkg.distPrefix %>.min.css': ['dist/css/<%= pkg.distPrefix %>.css']
            }
         }
      },
      copy: {
         fonts: {
            src: 'fonts/*',
            dest: 'dist/'
         },
         lessvar: {
            flatten: true,
            expand: true,
            src: 'bower_components/bootstrap/less/variables.less',
            dest: 'css/less/'
         }
      },
      clean: {
         dist: ["dist/*"],
         cleanup: ['dist', 'bower_components', 'node_modules', 'includes/ui/README.html'],
         preBuild: ['css/built-*']
      },
      // less: {
      //    // mixin: {
      //    //    options: {
      //    //       sourceMap: false,
      //    //    },
      //    //    src: ['css/less/components/mixins/utility-belt.less'],
      //    //    dest: 'css/less/components/built-utility-belt.less'
      //    // },
      //    dev: {
      //       options: {
      //          stripBanners: false,
      //          sourceMap: true,
      //          sourceMapFilename: 'dist/css/<%= pkg.distPrefix %>.css.map'
      //       },
      //       src: ['css/less/build.less'],
      //       dest: 'css/built-bootstrap+<%= pkg.name %>.css'
      //    }
      // },
      watch: {
         options: {
            livereload: true
         },
         less:{
            files: ['css/less/**'],
            tasks: ['css']
         },
         js:{
            files: ['js/**'],
            tasks: ['js']
         },
         html:{
            files: ['*.php', '*.html', '**/*.php', '**/*.html'],
            tasks: []
         },
         md:{
            files: ['*.md'],
            tasks: ['md2html']
         },
         full:{
            files: ['css/less/**', 'js/**', '*.php', '*.html', '**/*.php', '**/*.html', '*.md'],
            tasks: ['fullw']
         }
      },
      'sftp-deploy': {
         deploy: {
            auth: {
               host: '<%= pkg.url %>',
               port: 22,
               authKey: 'key1'
            },
            src: '../ROOTFOLDER',
            dest: '/SERVERLOCATION',
            exclusions: [
               'bower_components',
               'node_modules',
               '.DS_Store',
               '.gitignore',
               '.git',
               '.*',
               'img',
               'fonts',
            ],
            progress: true
         },
         img: {
            auth: {
               host: '<%= pkg.url %>',
               port: 22,
               authKey: 'key1'
            },
            src: '../ROOTFOLDER/img',
            dest: '/SERVERLOCATION/img',
            exclusions: ['.DS_Store'],
            progress: true
         },
         js: {
            auth: {
               host: '<%= pkg.url %>',
               port: 22,
               authKey: 'key1'
            },
            src: '../ROOTFOLDER/dist/js',
            dest: '/SERVERLOCATION/dist/js',
            exclusions: ['.DS_Store'],
            progress: true
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
      replace: {
         glyphicon: {
            src: ['dist/css/*'],
            dest: 'dist/css/',
            replacements: [{
               from: 'glyphicon',
               to: 'fa'
            }]
         }
      },
      md2html: {
         include: {
            files: [{
               src: ['README.md'],
               dest: 'includes/README-body.html'
            }]
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   // grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-ftp-deploy');
   grunt.loadNpmTasks('grunt-sftp-deploy');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-text-replace');
   grunt.loadNpmTasks('grunt-md2html');

   // Utility runners
   grunt.registerTask('copy-stack', ['copy:fonts']);
   grunt.registerTask('cleanup', ['clean:cleanup']);
   grunt.registerTask('setup', ['copy:lessvar', 'full']);

   // Slim task runners
   // grunt.registerTask('default', ['less:dev', 'concat:js', 'clean:preBuild', 'watch']);
   grunt.registerTask('default', ['concat:js', 'clean:preBuild', 'watch']);
   grunt.registerTask('css', ['less:dev', 'concat:css', 'replace', 'autoprefixer', 'clean:preBuild']);
   grunt.registerTask('js', ['concat:js']);

   // Production ready task runners
   grunt.registerTask('full', ['clean:dist', 'copy-stack', 'concat', 'replace', 'autoprefixer', 'cssmin', 'uglify', 'md2html', 'clean:preBuild']);
   grunt.registerTask('deploy', ['sftp-deploy:deploy']);
   grunt.registerTask('deployjs', ['sftp-deploy:js']);

};
