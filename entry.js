// entry.js with no routing
var React = require('react')
var ReactDOMServer = require('react-dom/server');
var Root = require('./components/Root.js')

module.exports = function render(locals, callback) {
  // TODO: React.renderToStaticMarkup is deprecated since React 0.14.0, use ReactDOMServer.renderToStaticMarkup instead
  var comp = React.createElement(Root, locals);
  debugger;
  var html = ReactDOMServer.renderToStaticMarkup(comp);
  callback(null, '<!DOCTYPE html>' + html)
}

