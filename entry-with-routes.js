// entry.js with routing
var React = require('react')
var Router = require('react-router')
var Routes = require('./Routes.js')

module.exports = function render(locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToStaticMarkup(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}
