module.exports = {
    app: {
        type: 'amd',
        moduleName: function (path) {
            return 'appkit/' + path;
        },
        files: [{
            expand: true,
            cwd: 'client/app/',
            src: '**/*.js',
            dest: '.grunt/build/js/app/'
        }]
    }
};
