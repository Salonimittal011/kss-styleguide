module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: { // indicates that it will be used only during development
                files: [{
                    expand: 'expanded',
                    check: false,
                    update: false,
                    cwd: './sass',
                    src: ['**/*.scss'],
                    dest: './css/',
                    ext: '.css'

                }]
            }
        },
    
        watch: {

            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev']
            },
            options: {
                livereload: true,
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('watchfiles', ['watch', 'sass', 'uglify']);
};