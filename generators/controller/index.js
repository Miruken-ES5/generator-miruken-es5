var generators = require('yeoman-generator');
var path = require('path');

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
        name: capitalize(this.name)
      }
    );
  }
});

function capitalize (target){
  return target.charAt(0).toUpperCase() + target.substring(1);
}
