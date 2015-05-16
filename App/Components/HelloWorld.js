var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component{
  render(){
      return React.createElement(React.Text, {style: styles.text}, "Hello World (again)!");
  }
}

module.exports = HelloWorld;
