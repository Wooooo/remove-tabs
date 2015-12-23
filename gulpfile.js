const
        FILENAME        = 'remove-tabs.js',
        FILENAME_MIN    = 'remove-tabs.min.js',
        gulp            = require('gulp'),
        $               = require('gulp-load-plugins')(),
        pkg             = require('./package.json');


var banner = ['/**'
,   ' * @name <%= pkg.name %>'
,   ' * @version v<%= pkg.version %>'
,   ' * @author <%= pkg.author.name %> <%= pkg.author.email %>'
,   ' * @license <%= pkg.license %>'
,   ' */'
,   ''
].join('\n');

gulp.task('header:source', function(){
    return gulp.src('src/index.js')
        .pipe($.header(banner, {pkg: pkg}))
        .pipe($.rename(FILENAME))
        .pipe(gulp.dest('./'));
});

gulp.task('uglify:source', function(){
    return gulp.src('src/index.js')
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg}))
        .pipe($.rename(FILENAME_MIN))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['uglify:source', 'header:source']);