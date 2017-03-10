'use strict';
const build = require('./assembler/build.js').build;
build({
  base: './js/masters/',
  files: ['opstarts.src.js'],
  pretty: false,
  output: './dist/'
});