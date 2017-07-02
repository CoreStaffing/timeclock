import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CoreLinksView } from 'core-timeclock';

export default class ResourcesScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CoreLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
