module.exports = function(grunt) {

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      banner: '/*!\n' +
      ' * <%= pkg.gname %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' */\n',
      concat: {
         options: {
            separator: '\n'
         },
         css: {
            src: ['css/built-bootstrap+<%= pkg.gname %>.css',
                  //'bower_components/fontawesome/css/font-awesome.min.css',
                  //'bower_components/animate.css/animate.min.css',
                  //'bower_components/anchor-js/anchor.css'
                  ],
            dest: 'dist/css/<%= pkg.gname %>.css'
         },
         js: {
            src: ['js/bootstrap.min.js',
                  //'bower_components/anchor-js/anchor.js',
                  //'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
                  'js/<%= pkg.gname %>.js'],
            dest: 'dist/js/<%= pkg.gname %>.js'
         }
      },
      uglify: {
         dist: {
            files: {
               'dist/js/<%= pkg.gname %>.min.js': ['dist/js/<%= pkg.gname %>.js']
            }
         }
      },
      cssmin: {
         dist: {
            files: [{
               expand: true,
               cwd: 'dist/css/',
               src: ['*.css',  '!*.min.css'],
               dest: 'dist/css/',
               ext: '.min.css'
            }]
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
      less: {
         mixin: {
            options: {
               sourceMap: false,
            },
            src: ['css/less/components/mixins/utility-belt.less'],
            dest: 'css/less/components/built-utility-belt.less'
         },
         dev: {
            options: {
               banner: '<%= banner %>',
               stripBanners: false,
               sourceMap: true,
               sourceMapFilename: 'dist/css/<%= pkg.gname %>.css.map'
            },
            src: ['css/less/build.less'],
            dest: 'css/built-bootstrap+<%= pkg.gname %>.css'
         }
      },
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
            browsers: 'last 4 versions'
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
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-sftp-deploy');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-text-replace');
   grunt.loadNpmTasks('grunt-md2html');

   // Utility runners
   grunt.registerTask('copy-stack', ['copy:fonts']);
   grunt.registerTask('cleanup', ['clean:cleanup']);
   grunt.registerTask('setup', ['copy:lessvar', 'full']);

   // Slim task runners
   grunt.registerTask('default', ['less:dev', 'concat:js', 'clean:preBuild', 'watch']);
   grunt.registerTask('css', ['less:dev', 'concat:css', 'replace', 'autoprefixer', 'clean:preBuild']);
   grunt.registerTask('js', ['concat:js']);

   // Production ready task runners
   grunt.registerTask('full', ['clean:dist', 'copy-stack', 'less', 'concat', 'replace', 'autoprefixer', 'cssmin', 'uglify', 'md2html', 'clean:preBuild']);
   grunt.registerTask('deploy', ['sftp-deploy:deploy']);
   grunt.registerTask('deployjs', ['sftp-deploy:js']);

};
