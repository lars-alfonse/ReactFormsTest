import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from './app/components/Forms/Form';
import Header from './app/components/Header/Header';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: '',
                   };
  }
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: .7, alignSelf: 'stretch'}}>
          <Header />
        </View>
        <View style={{flex: 5, backgroundColor: "skyblue", alignSelf: 'stretch'}}>
          <Form />
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
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
const Stack = StackNavigator({
  Home: {
    screen: App,
  },
});
