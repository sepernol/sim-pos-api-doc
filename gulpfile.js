var gulp = require('gulp'),  
    aglio = require('gulp-aglio'),
    connect = require('gulp-connect'),
    drakov = require('drakov'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');

gulp.task('docs', function () {  
        gulp.src([ 'api/*.apib', 'api/*.md' ])
                       .pipe(plumber())
                       .pipe(aglio({themeTemplate: 'triple', themeStyle: 'default', themeVariables: 'slate', themeFullWidth: true}))
                       .pipe(gulp.dest('docs'));
                       });

                       gulp.task('server', function() {  
                       connect.server({
                       livereload: true,
                       root: ['docs']
                       });
                       });

                       gulp.task('livereload', function() {  
                       gulp.src(['docs/*.html'])
                       .pipe(plumber())
                       .pipe(watch(['api/*.apib', 'api/*.md']))
                       .pipe(connect.reload());
                       });

                       gulp.task('watch', function() {  
                       gulp.watch(['api/*.apib', 'api/*.md'], ['docs']);
                       })

                       gulp.task('mock', function() {  
                       var argv = {
                       sourceFiles: 'api/*.apib',
                       serverPort: 5557,
                       disableCORS: false,
                       discover: true
                       }
                       drakov.run(argv);
                       })

                       gulp.task('default', ['docs', 'server', 'livereload', 'watch']);

                       gulp.task('build', ['docs']);
