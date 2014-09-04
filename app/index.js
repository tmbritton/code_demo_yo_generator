'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var CodeDemoGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    console.log(this.yeoman);
  },

  scaffoldFolders: function() {
    this.mkdir('css');
    this.mkdir('css/_sass');
    this.mkdir('css/_sass/_partials');
    //this.mkdir('css/.sass-cache');
    this.mkdir('js');
    this.mkdir('js/vendor');
    this.mkdir('img');
  },

  copyFiles: function() {
    this.copy('package.json', 'package.json');
    this.copy('index.html', 'index.html');
    this.copy('README.md', 'README.md');
    this.copy('config.rb', 'config.rb');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('css/_sass/screen.scss', 'css/_sass/screen.scss');
    this.copy('css/_sass/_partials/_variables.scss', 'css/_sass/_partials/_variables.scss');
    this.copy('css/_sass/_partials/_mixins.scss', 'css/_sass/_partials/_mixins.scss');
    this.copy('css/_sass/_partials/_layout.scss', 'css/_sass/_partials/_layout.scss');
    this.copy('css/_sass/_partials/_nav.scss', 'css/_sass/_partials/_nav.scss');
    this.copy('js/main.js', 'js/main.js');
    this.copy('js/vendor/jquery-1.11.0.min.js', 'js/vendor/jquery-1.11.0.min.js');
    this.copy('js/vendor/modernizr-2.6.2.min.js', 'js/vendor/modernizr-2.6.2.min.js');
  },

  runNpm: function(){
    var done = this.async();
    this.npmInstall("", function(){
      console.log("\nEverything Setup !!!\n");
      done();
    });
  },

});

module.exports = CodeDemoGenerator;
