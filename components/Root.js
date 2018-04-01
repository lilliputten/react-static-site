// components/Root.jsx
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

// TODO: React.createClass is deprecated since React 15.5.0, use the npm module create-react-class instead
// var Root = React.createClass({
class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <RouteHandler {...this.props} />
        </body>
      </html>
    )
  }
}

module.exports = Root
