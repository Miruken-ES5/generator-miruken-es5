'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('miruken:controller', function () {

  var fileName = 'myController.js';

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['myController'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(fileName);
  });

  it('uses uppercase name for the controller', function(){
    assert.fileContent(fileName, 'var MyController = function');
  });
});
