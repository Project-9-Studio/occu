import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import withLoadedState from './src/hooks/useLoadingState';
import Header from './src/components/Header';
import FilterJobs from './src/components/FilterJobs';

export const HomeScreen = withLoadedState(class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FilterJobs />
      </View>
    );
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: Header
  }
});

export const AppContainer = createAppContainer(AppNavigator);

export function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFEFF4',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25
  },

  text: {
    fontSize: 68,
    color: '#fff',
    fontFamily: 'public-sans-bold',
  }
});

export default withLoadedState(App);
