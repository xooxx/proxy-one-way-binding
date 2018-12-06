const sass = require('node-sass');

module.exports = function(grunt) {
    const pkg = grunt.file.readJSON('package.json');
    const nodePackages = Object.keys(pkg.dependencies || {});

    const config = {
        pkg: pkg,
        root: 'src',
        assets: '<%= root %>/assets',
        dist: 'dist',
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                options: {
                    includePaths: require('node-refills').includePaths
                },
                files: {
                    '<%= dist %>/css/main.css': '<%= root %>/sass/main.scss'
                }
            }
        },
        browserify: {
            options: {
                browserifyOptions: {  debug: false },
            },
            vendor: {
                options: {
                    require: nodePackages
                },
                files: {
                    '<%= dist %>/js/vendor.js': []
                }
            },
            app: {
                options: {
                    browserifyOptions: { extensions: ['.jsx', '.js'] },
                    transform: [["babelify", { "presets": ["@babel/preset-env", "@babel/preset-react"] }]],
                    exclude: nodePackages
                },
                files: {
                    '<%= dist %>/js/app.js': '<%= root %>/js/main.jsx'
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
                    cwd: '<%= dist %>/js',       // Src matches are relative to this path.
                    src: ['**/*.js'],   // Actual pattern(s) to match.
                    dest: '<%= dist %>/js',      // Destination path prefix.
                    ext: '.js',         // Dest filepaths will have this extension.
                    extDot: 'first'     // Extensions in filenames begin after the first dot
                }]
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: ["<%= root %>/sass/**/*.scss"],
                tasks: ['sass:debug']
            },
            js: {
                files: ["<%= root %>/js/**/*.jsx","<%= root %>/js/**/*.js"],
                tasks: ['browserify:debugApp']
            }
        }
    };

    config.sass.debug =  Object.assign({}, config.sass.dist);
    config.sass.debug.options =  Object.assign(config.sass.debug.options, {sourceMap: true});
    config.browserify.debugVendor =  Object.assign({}, config.browserify.vendor);
    config.browserify.debugVendor.options =  Object.assign(config.browserify.debugVendor.options, {debug: true});
    config.browserify.debugApp =  Object.assign({}, config.browserify.app);
    config.browserify.debugApp.options =  Object.assign(config.browserify.debugApp.options, {debug: true});


    grunt.initConfig(config);
    require('load-grunt-tasks')(grunt);
    grunt.registerTask("prod-env", ["Enable production mode"], ()=>  process.env.NODE_ENV = 'production' );
    grunt.registerTask('build', ['prod-env', 'sass:dist', 'browserify:vendor', 'browserify:app', 'uglify']);
    grunt.registerTask('default', ["browserify:debugVendor", "watch" ]);
};