import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			navBarSpacing: 0,
		}
	}
	componentDidMount(){
		this.setState({navBarSpacing: Expo.Constants.statusBarHeight})
	}
	_buttonOne(){
		Alert.alert("Button One");
	}
	_buttonTwo(){
		Alert.alert("Button Two");
	}
	_buttonThree(){
		Alert.alert("Button Three");
	}
	render(){
		return(
			<View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent:'space-between', backgroundColor: 'black', paddingTop: this.state.navBarSpacing}}>
				<Button 
					style={styles.headerButton}
            		onPress={this._buttonOne.bind(this)}
            		title="Home"
          		/> 

          		<Button
          			style={styles.headerButton}
            		onPress={this._buttonThree.bind(this)}
            		title="Config"
          		/>

			</View>
			);
	}
}
const styles = StyleSheet.create({
  headerButton: {
    flex: 1,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});