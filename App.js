import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry } from 'react-native';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  _buttonPressed(){
    var name = this.state.text;
    var message =  name + " is a bitch";
    Alert.alert(message);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3, width: 100, padding: 10, backgroundColor: 'powderblue'}}>
          
        </View>
        <View style={{flex: 3, backgroundColor: "skyblue"}}>
          <TextInput
            style={{height: 40}}
            placeholder="enter your name here"
            onChangeText={(text) => this.setState({text})}
          />
          
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
          <Button 
            onPress={this._buttonPressed.bind(this)}
            title="Press Me"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
