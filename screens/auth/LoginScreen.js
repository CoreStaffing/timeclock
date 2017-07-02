import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from 'react-native';

import { MonoText } from '../../components/StyledText';
import LoginForm from '../../components/LoginForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../../assets/images/core-staffing-logo-black.png')} style={styles.logoImage} />
      <Text style={styles.title}>Login to Timeclock</Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFD8DC'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',

  },
   logoImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  title: {
    color:'#212121',
    marginTop: 10,
    width: 300,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer:{

  },
});
