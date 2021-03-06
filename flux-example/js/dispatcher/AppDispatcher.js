var Dispatcher = require('flux').Dispatcher; //scope:local
var assign = require('object-assign'); //scope:local

var AppDispatcher = assign(new Dispatcher(), {
  handleChangeAction: function(action) { 
    this.dispatch({
      source: 'CHECKBOX_CHECKED',
      action: action
    });
  },
  handleSendValueAction: function(action){ 
    this.dispatch({
      source: 'SEND_VALUE',
      action: action
    })
  }
});

module.exports = AppDispatcher; 