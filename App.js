import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import withLoadedState from './src/components/hoc/withAppLoader';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import store from './src/models';
import { actions } from './src/models/auth';
import Login from './src/components/Login';
import Home from './src/components/homeView';

Amplify.configure(aws_exports);

const AppNavigator = createStackNavigator({
  Home
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export const AppContainer = createAppContainer(AppNavigator);

export function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(function() {
    if (!user) {
      Auth.currentAuthenticatedUser()
        .then(user => dispatch(actions.setUser(user)))
        .catch(e => console.log(e));
    }
  }, [user]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {(user) ? <AppContainer /> : <Login />}
    </>
  );
}

export default function ProvideRedux() {
  const LoadedApp = withLoadedState(App);
  return (
    <Provider store={store}>
      <LoadedApp />
    </Provider>
  );
}
