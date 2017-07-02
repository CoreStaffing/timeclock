import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
  TouchableHighlight
} from 'react-native';



export default class LoginForm extends React.Component {
render() {
    return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <TextInput 
    placeholder="email"
    returnKeyType="next"
    onSubmitEditing={() => this.passwordInput.focus()}
    KeyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    style={styles.input} />

    <TextInput 
    placeholder="password"
    returnKeyType="go"
    secureTextEntry
    style={styles.input}
    ref={(input) => this.passwordInput = input}
    />
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText} >LOGIN</Text>
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
    paddingVertical: 15
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