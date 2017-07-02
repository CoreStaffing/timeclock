import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CoreConfigView } from 'core-timeclock';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CoreConfigView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
