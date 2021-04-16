import React from 'react';
import './src/router/useReactNativeScreens';
import ProvideRouter from './src/router/AppContainer';
import { Provider } from 'react-redux';
import withLoadedState from './src/components/hoc/withAppLoader';
import store from './src/models';
import Auth from './src/router/Auth';
import AppNav from './src/router/App';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function App() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    try {
      AsyncStorage.getItem('user')
        .then((value) => {
          if (value !== null) {
            setUser(JSON.parse(value));
          }
        });
    } catch(e) {
      console.log(e);
    }
  }, []);

  return (
    <ProvideRouter>
      {(user) ? <AppNav /> : <Auth />}
    </ProvideRouter>
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
