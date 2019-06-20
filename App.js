import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, Button } from 'react-native';
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

Amplify.configure(aws_exports);

export class Home extends React.Component {
  state = { showTimeline: false };

  render() {
    return (
      <View style={styles.container}>
        <Header image={this.props.user.picture && this.props.user.picture.data.url} />
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
  Home: { screen: connect((state) => ({ user: state.user }))(Home) }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export const AppContainer = createAppContainer(AppNavigator);

const Login = connect(null, {
  loginWithFB: actions.loginWithFacebook,
  loginWithGoogle: actions.loginWithGoogle
})(function({ loginWithFB, loginWithGoogle }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.loginContainer}>
        <Text style={{ marginBottom: 50, fontSize: 60, fontFamily: 'public-sans-bold' }}>Occu</Text>
        
        <View style={{ marginBottom: 25 }}>
          <Button onPress={loginWithFB} title="Login with Facebook" color="blue" />
        </View>
    
        <Button onPress={loginWithGoogle} title="Login with Google" color="red" />
      </View>
    </SafeAreaView>
  );
})

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
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
