import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider, connect } from 'react-redux';
import withLoadedState from './src/hooks/useLoadingState';
import Header from './src/components/Header';
import FilterJobs from './src/components/FilterJobs';
import JobsList from './src/components/JobsList';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import store from './src/models';
import { actions } from './src/models/auth';
import Login from './src/components/Login';

Amplify.configure(aws_exports);

export class Home extends React.Component {
  state = { showTimeline: false };

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <Header
          image={user.photoURL || (user.picture && user.picture.data.url)}
          logout={this.props.logout}
        />
        <View style={styles.inner}>
          <FilterJobs />
          <JobsList />
        </View>
        <BottomTabNavigator {...this.props} setTimelineView={this.setTimelineView} />
      </View>
    );
  }

  setTimelineView = (showTimeline) => this.setState({ showTimeline });
};

export class Timeline extends React.Component {
  render() {
    return (
      <View style={styles.timeline}>
        <Text style={styles.timelineHeader}>
          Timeline
        </Text>
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="white" />
      </View>
    );
  }
};

const AppNavigator = createStackNavigator({
  Home: { screen: connect((state) => ({
      user: state.user
    }), { logout: actions.logout })(Home) 
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export const AppContainer = createAppContainer(AppNavigator);

export class App extends React.Component {
  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => this.props.setUser(user))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        {(this.props.user) ? <AppContainer /> : <Login />}
      </React.Fragment>
    );
  }
}

const ConnectedApp = connect((state)=>({
  user: state.user
}), {
  setUser: actions.setUser
})(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFEFF4',
    alignItems: 'center'
  },
  text: {
    fontSize: 68,
    color: '#fff',
    fontFamily: 'public-sans-bold',
  },
  timeline: {
    flex: 1,
    backgroundColor: '#1FDA9A',
    padding: 24,
  },
  timelineHeader: { fontFamily: 'public-sans-bold', fontSize: 28, marginBottom: 14 },
  input: {
    backgroundColor: 'rgba(35, 35, 35, 0.2)',
    borderRadius: 16,
    padding: 12,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'public-sans',
    fontSize: 16
  },
  inner: {
    flex: 1,
    alignSelf: 'stretch',
    paddingLeft: 25,
    paddingRight: 25
  }
});

export default function ProvideRedux() {
  const LoadedApp = withLoadedState(ConnectedApp);
  return (
    <Provider store={store}>
      <LoadedApp />
    </Provider>
  );
}
