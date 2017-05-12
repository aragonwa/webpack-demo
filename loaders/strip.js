var stripComments =require('strip-json-comments');

module.exports = function(source) {
  // If same inputs, return cached results
  this.cacheable();
  return stripComments(source);
}