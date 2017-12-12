import Voice from 'react-native-voice';
import React, {Component, Button, AppRegistry} from 'react';
 
export default class VoiceTest extends Component {
  constructor(props) {
  	super(props)
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }
  onStartButtonPress(e){
    Voice.start('en');
  }
  render(){
  	return(
  		<Button onPress={onStartButtonPress} title='start'/>
  		);
  }
}
