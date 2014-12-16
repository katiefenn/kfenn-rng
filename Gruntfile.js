module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/*'],
            options: {
                node: true,
            }
        },
        watch: {
            jshint: {
                files: ['src/*.js'],
                tasks: ['jshint:all']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('dev', ['watch']);

};
