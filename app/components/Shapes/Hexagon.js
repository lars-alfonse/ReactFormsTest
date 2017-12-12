import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from '../Forms/Form';
import Header from '../Header/Header';


export default class Hexagon extends React.Component {

  	constructor(props){
    	super(props);
  	}
  	componentDidMount(){
		this.setState({navBarSpacing: Expo.Constants.statusBarHeight})
  	}
  	static navigationOptions = {
    	title: 'BeeForm',
    	headerStyle: { backgroundColor: 'deepskyblue', marginTop: Expo.Constants.statusBarHeight,}
  	}
  	_navbutton = () => {
    	this.props.navigation.navigate('Form');
  	}
  render() {
    //const { navigate } = this.props.navigation;
    return (
  	  	<View style={styles.hexagon}>
        	<View style={styles.hexagonInner} />
        	<View style={styles.hexagonBefore} />
        	<View style={styles.hexagonAfter} />
        	<Text style={styles.buttonText}> Press</Text>
      	</View>	
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
  	position: 'absolute',
  	top: 15,
  },
  hexagon: {
    width: 100,
    height: 55,
    alignItems: 'center',
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: 'red'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red'
  }
});

AppRegistry.registerComponent('hexagon', () => hexagon);