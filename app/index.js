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
    this.mkdir('css/.sass-cache');
    this.mkdir('js');
    this.mkdir('js/vendor');
    this.mkdir('img');
  },

  copyFiles: function() {
    this.copy('package.json', 'package.json');
    this.copy('index.html', 'index.html');
    this.copy('css/config.rb', 'css/config.rb');
    this.copy('css/_sass/ie.scss', 'css/_sass/ie.scss');
    this.copy('css/_sass/print.scss', 'css/_sass/print.scss');
    this.copy('css/_sass/screen.scss', 'css/_sass/screen.scss');
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
