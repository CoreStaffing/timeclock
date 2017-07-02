import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  StackNavigator
} from 'react-native';

export default class SplashForm extends React.Component {
render() {
    return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <TouchableOpacity 
    onPress={() => navigate('login')}
     style={styles.buttonContainer} >
      <Text style={styles.buttonText} >Login With Email</Text>
    </TouchableOpacity>
    <TouchableHighlight>
      <Text style={styles.registerText} >Register</Text>
    </TouchableHighlight>
    </View>
    );
  }
}

  

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.7)',
    marginBottom: 30,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#455A64',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'

  },
  registerText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    paddingVertical: 15
  }

});