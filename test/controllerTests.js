'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('miruken:controller', function () {

  var fileName = 'myName.js';
  var namespace = 'sixflags.benefits';

  describe('all prompts', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/controller'))
        .withArguments([])
        .withPrompts({
          name:      'myName',
          parent:    'myParent',
          namespace: 'myNamespace'
        })
        .on('end', done);
    });

    testAssertions({ parent: true });
  });

  describe('all arguments', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/controller'))
        .withArguments(['myName', 'myParent', 'myNamespace'])
        .on('end', done);
    });

    testAssertions({ parent: true });
  });

  describe('arguments and prompts', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/controller'))
        .withArguments(['myName'])
        .withPrompts({
          parent:    'myParent',
          namespace: 'myNamespace'
        })
        .on('end', done);
    });

    testAssertions({ parent: true });
  });

  describe('no parent', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/controller'))
        .withArguments(['myName'])
        .withPrompts({
          parent:    '',
          namespace: 'myNamespace'
        })
        .on('end', done);
    });

    testAssertions({ parent: false });
  });

  function testAssertions(options){

    it('creates file', function () {
      assert.file('myName.js');
    });

    it('sets package variable', function(){
      assert.fileContent(fileName, 'var myNamespace = new base2.Package');
    });

    it('sets namespace variable', function(){
      assert.fileContent(fileName, "name:    'myNamespace'");
    });

    it('handles parent variable', function(){
      if(options.parent === true){
        assert.fileContent(fileName, "parent:  'myParent'");
      } else {
        assert.noFileContent(fileName, 'parent:');
      }
    });

    it('exports the controller', function(){
      assert.fileContent(fileName, "exports: 'MyName'");
    });

    it('uses uppercase name for the controller', function(){
      assert.fileContent(fileName, 'var MyName = Controller.extend');
    });
  }

});
