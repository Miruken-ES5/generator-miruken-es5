'use strict';

var test = require('./subGeneratorTestHelper');
var _ =    require('lodash');

var subGenerators = [
  'controller',
  'model',
  'installer',
  'runner'
];

_.each(subGenerators, test);
