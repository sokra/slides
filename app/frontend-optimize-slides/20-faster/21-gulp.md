So this awesome little gulp build...

``` javascript
gulp.task('js', function () {
	return gulp.src('js/**/*.js')
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});
```

... can't be too wrong?