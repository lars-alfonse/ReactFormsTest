import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';

import Form from './app/components/Forms/Form';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: '',
                   };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 5, backgroundColor: "skyblue"}}>
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
    justifyContent: 'center',
  },
});
