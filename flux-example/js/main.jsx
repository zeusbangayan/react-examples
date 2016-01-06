/**
* main.jsx
* file calls the App component for rendering
* @author: Aakash Dodiya
* @website: http://www.developersq.com
*/

React = require('react'); // scope:global
ReactDOM = require('react-dom'); // scopeglobal
$ = require('jquery'); // scope:global

var App = require('./components/App.jsx'); //scope:local

ReactDOM.render(
  <App />,
  document.getElementById('container')
);