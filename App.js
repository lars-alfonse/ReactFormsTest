import React, { Component }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image, AppRegistry, form } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Form from './app/components/Forms/Form';
import Header from './app/components/Header/Header';
import Home from './app/components/Home/Home';
import Hexagon from './app/components/Shapes/Hexagon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdd9a5',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
export default StackNavigator({
  Home: {
    screen: Home,
  },
  Form: {
    screen: Form,
  },
});