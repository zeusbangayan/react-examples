/**
* App component
* @author: Aakash
* @website: http://developersq.com
*/

AppActions = require('../actions/AppActions'); //scope:global
AppStore = require('../stores/AppStore'); //scope:global
Label = require('./Label.jsx'); //scope:global
var CheckBoxInput = require('./CheckBoxInput.jsx'); //scope:local
var RadioGroup = require('./RadioGroup.jsx'); //scope:local
var InputCom = require('./InputCom.jsx'); //scope:local
var SwimmmingChoices = require('./SwimmmingChoices.jsx'); //scope:local
var PaintingChoices = require('./PaintingChoices.jsx'); //scope:local

// App component
var App = React.createClass({
  // get initial state
  getInitialState: function() {
    return {
      radioValue: 'swimming',
    };
  },
  // invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
  componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
  },
  // invoked immediately before a component is unmounted and destroyed. Cleanup should go here.
  componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
  },
  // on change event
  _onChange : function(){     
      this.setState({
          radioValue : AppStore.getChoiceValue()
      });
  },
  // render component 
  render: function() {
    var magChoices;  
   // console.log(this.state.radioValue); 
    if(this.state.radioValue == 'swimming'){
       magChoices = <SwimmmingChoices />;
    }else{
       magChoices = <PaintingChoices />;
    }
    return( 
      <form>  
          <p>
              <Label text='first name:'/>
              <InputCom type='text' /> 
          </p>
          <p>
              <Label text='last name:'/> 
              <InputCom type='text' />
          </p>
          <p>
              <Label text='email:'/>
              <InputCom type='email' />
          </p> 
          <p>
              <Label text='Age:'/>
              <InputCom type='text' />
          </p>
          <p>
              <Label text='Gender:'/>
              <CheckBoxInput ischecked={true} value='male'/> <Label text='Male'/>
              <CheckBoxInput ischecked={false} value='female'/> <Label text='Female'/>
          </p>
          <div>
              <Label text='Hobbies:'/>
              <RadioGroup />
          </div>
          {magChoices}
          
     </form> 
    );
  }
});

module.exports = App;