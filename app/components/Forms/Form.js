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
			<View style={{flex: 1, justifyContent: 'space-between'}}>
				<TextInput
					style={styles.formTextInput}
            		placeholder="Enter Name"
            		placeholderTextColor = 'black'
            		onChangeText={(text) => this.setState({name: text})}
            	>
          		</TextInput>
          		<TextInput
          			style={styles.formTextInput}
            		placeholder="Enter Location"
            		placeholderTextColor = 'black'
            		onChangeText={(text) => this.setState({address: text})}
          		>
          		</TextInput>
          		<TextInput
          			style={styles.formTextInput}
            		placeholder="Enter Amount"
            		placeholderTextColor = 'black'
            		onChangeText={(text) => this.setState({amount: text})}
          		>
          		</TextInput>
          		<TextInput
          			style={styles.formTextInput}
            		placeholder="Enter Message"
            		placeholderTextColor = 'black'
            		onChangeText={(text) => this.setState({text: text})}
          		>
          		</TextInput>
          		<Button
          			style={{flex: 1}}
            		onPress={this._submitForm.bind(this)}
            		title="Submit"
          		/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  formTextInput: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
