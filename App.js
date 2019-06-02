import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'public-sans-bold': require('./assets/public-sans/fonts/webfonts/PublicSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded && <Text style={styles.text}>Occu</Text>}
      </View>
    );
  }
}

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
