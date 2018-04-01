// entry.js with no routing
var React = require('react')
var Root = require('./components/Root.jsx')

module.exports = function render(locals, callback) {
  // TODO: React.renderToStaticMarkup is deprecated since React 0.14.0, use ReactDOMServer.renderToStaticMarkup instead
  var html = React.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}

