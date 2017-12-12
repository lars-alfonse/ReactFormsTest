import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, TouchableOpacity} from 'react-native';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StackNavigator } from 'react-navigation';

import Form from '../Forms/Form';
import Header from '../Header/Header';
import Hexagon from '../Shapes/Hexagon'
import Auth from '../Auth/Auth';


const config = {
  issuer: 'https://dev-291601.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{clientId}'
}

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
       		<Router>
        		<Security issuer={config.issuer}
                  	client_id={config.client_id}
                  	redirect_uri={config.redirect_uri}
        		>
        			<Route path='/' exact={true} component={Home}/>
        			<Route path='/implicit/callback' component={ImplicitCallback}/>
        		</Security>
      		</Router>
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