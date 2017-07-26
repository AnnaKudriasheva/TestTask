"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const del = require("del");

const isDevelopment = process.env.NODE_ENV ||
 process.env.NODE_ENV == "development";

gulp.task("sass", function () {
  return gulp.src("frontend/styles/main.scss")
  .pipe(gulpIf(isDevelopment, sourcemaps.init()))
  .pipe(sass().on("error", sass.logError))
  .pipe(gulpIf(isDevelopment, sourcemaps.write()))
  .pipe(gulp.dest("public"));
});

// gulp.task("clean", function () {
//   return del("public");
// });

gulp.task("assets", function () {
  return gulp.src("frontend/assets/**/*.*")
  .pipe(gulp.dest("public"));
});

gulp.task("scripts", function () {
  return gulp.src("frontend/js/**/*.*")
  .pipe(gulp.dest("public"));
});

gulp.task("build", gulp.series("sass", "assets", "scripts"));

gulp.task("watch", function () {
  gulp.watch("frontend/styles/main.scss", gulp.series("sass"));
  gulp.watch("frontend/assets/**/*.*", gulp.series("assets"));
  gulp.watch("frontend/assets/**/*.*", gulp.series("scripts"));
});
