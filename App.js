import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import withLoadedState from './src/hooks/useLoadingState';
import Header from './src/components/Header';
import FilterJobs from './src/components/FilterJobs';
import JobsList from './src/components/JobsList';

export const HomeScreen = withLoadedState(class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FilterJobs />
        <JobsList />
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
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </React.Fragment>
  );
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
