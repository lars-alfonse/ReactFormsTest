import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from '../Forms/Form';
import Header from '../Header/Header';
import Hexagon from '../Shapes/Hexagon'

export default class Home extends React.Component {
	static navigationOptions = {
    	title: 'BeeForm'
  	}

  constructor(props){
    super(props);
    this.state = {text: '',
                   };
  }
	_navbutton = () => {
    this.props.navigation.navigate('Form');
  }
  render() {
  	
    return (
      <View style={styles.container}>
        <View style={{flex: .7, alignSelf: 'stretch'}}>
        </View>
        <View style={{flex: .7, alignSelf: 'stretch'}}>
    
        </View>
        <View style={{flex: 5, backgroundColor: "#fdd9a5", alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
        	<Hexagon/>
        </View>
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