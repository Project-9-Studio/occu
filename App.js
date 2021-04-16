import React from 'react';
import './src/router/useReactNativeScreens';
import ProvideRouter from './src/router/AppContainer';
import { Provider } from 'react-redux';
import withLoadedState from './src/components/hoc/withAppLoader';
import store from './src/models';
import Auth from './src/router/Auth';

export function App() {
  return (
    <ProvideRouter>
      <Auth />
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
