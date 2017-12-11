import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from '../Forms/Form';
import Header from '../Header/Header';

export default class Hexagon extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {text: '',
                   };
  }
  _hextouch = () =>{
  	Alert.alert("From HEXAGON: Hello World");
  }
  render() {
  	
    return (
   		<TouchableOpacity onPress={this._hextouch} style={{height:300, width: 250, justifyContent: 'center'}}>
  	  		<View style={styles.hexagon}>
        		<View style={styles.hexagonInner} />
        		<View style={styles.hexagonBefore} />
        		<View style={styles.hexagonAfter} />
        		<Text> Press</Text>
      		</View>
      	</TouchableOpacity>		
    );
  }
}

const styles = StyleSheet.create({

  hexagon: {
    width: 100,
    height: 55
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