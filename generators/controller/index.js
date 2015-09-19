var generators = require('yeoman-generator'),
    path =       require('path'),
    _ =          require('lodash');

module.exports =  generators.NamedBase.extend({
	constructor: function() {
    generators.NamedBase.apply(this, arguments);
		this.sourceRoot(path.join(this.sourceRoot(), '../../templates'));
	},
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(this.name + '.js'),
      {
        name: _.capitalize(this.name)
      }
    );
  }
});
