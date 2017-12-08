import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';

export default class Form extends React.Component {
	constructor(props){
    	super(props);
    	this.state = {text: '',
                	  name: '',
                      address: '',
                      amount: '',
                     };
	}
	static defaultProps{
		name: 'username'
	}
	_submitForm(){
    	let name = this.state.name;
    	let address = this.state.address;
    	let amount = this.state.amount;
    	let text = this.state.text;
    	let message = name + " has submitted " + amount + " from " + address;
    	Alert.alert(message)
  	}
	render(){
		return(
			<View>
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
		);
	}
}