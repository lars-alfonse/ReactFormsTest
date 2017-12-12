import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from '../Forms/Form';
import Header from '../Header/Header';
import Hexagon from '../Shapes/Hexagon'

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={
			navBarSpacing: 0,
		}
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
  	
    return (
      <View style={styles.container}>
        <View style={{flex: .7, alignSelf: 'stretch'}}>
        <Button onPress={this._navbutton.bind(this)} title='button'/>
        </View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Form')}} style={{height:300, width:300, justifyContent: 'center', alignItems: 'center'}}>
        	<View style={{flex: 5, backgroundColor: "#fdd9a5", alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
        		<Hexagon/>
        	</View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdd9a5',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('home', () => home);