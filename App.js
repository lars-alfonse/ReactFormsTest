import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: '',
                  name: '',
                  address: '',
                  amount: '',
                  };
  }
  _buttonPressed(){
    var name = this.state.text;
    var message =  name + " has pressed the button";
    Alert.alert(message);
  }
  _submitForm(){
    var name = this.state.name;
    var address = this.state.address;
    var amount = this.state.amount;
    var text = this.state.text;
    var message = name + " has submitted " + amount + " from " + address;
    Alert.alert(message)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, width: 100, padding: 10, backgroundColor: 'powderblue'}}>
          <Button 
            onPress={this._buttonPressed.bind(this)}
            title="Press Me"
          />
        </View>
        <View style={{flex: 5, backgroundColor: "skyblue"}}>
          <TextInput
            placeHolder="Enter Name"
            onChangeText={(text) => this.setState({name: text})}
            >
          </TextInput>
          <TextInput
            placeHolder="Enter Location"
            onChangeText={(text) => this.setState({address: text})}
          >
          </TextInput>
          <TextInput
            placeHolder="Enter Amount"
            onChangeText={(text) => this.setState({amount: text})}
          >
          </TextInput>
          <TextInput
            placeHolder="Enter Message"
            onChangeText={(text) => this.setState({text: text})}
          >
          </TextInput>
          <Button 
            onPress={this._submitForm.bind(this)}
            title="Submit"
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
