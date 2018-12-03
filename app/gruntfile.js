module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        availabletasks: {
            tasks: {
                options: {
                    filter: 'exclude',
                    tasks: ['availabletasks', 'tasks']
                }
            }
        },
        jshint: {
            options: {
                esversion: 6,
                reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
                sub: true
            },
            files: ['src/js/**/*.js']
        },
        browserify: {
            production: {
                src: [
                    "src/js/main.js"
                ],
                dest: 'dist/bundle.js',
                options: {
                    browserifyOptions: { debug: false },
                    transform: [["babelify", { "presets": ["@babel/env"] }]],
                    plugin: []
                }
            },
            development: {
                src: [
                    "src/js/main.js"
                ],
                dest: 'dist/bundle.js',
                options: {
                    watch: true,
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["@babel/env"] }]],
                    plugin: []
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            dynamic_mappings: {
                files: [{
                    expand: true,       // Enable dynamic expansion.
                    cwd: 'dist/',       // Src matches are relative to this path.
                    src: ['**/*.js', '!js/libs/**/*.js'],   // Actual pattern(s) to match.
                    dest: 'dist/',      // Destination path prefix.
                    ext: '.js',         // Dest filepaths will have this extension.
                    extDot: 'first'     // Extensions in filenames begin after the first dot
                }]
            }
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['newer:jshint', 'newer:browserify:development']
            },
            options: {
                nospawn: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-available-tasks');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['browserify:production', 'uglify']);
    grunt.registerTask('tasks', ['availabletasks']);

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};