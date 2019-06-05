import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import withLoadedState from './src/hooks/useLoadingState';

export default withLoadedState(class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.loaded && <Text style={styles.text}>Occu</Text>}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1FDA9A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 68,
    color: '#fff',
    fontFamily: 'public-sans-bold',
  }
});
