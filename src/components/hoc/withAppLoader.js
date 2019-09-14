import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

/**
 * _cacheResourcesAsync
 * Caches images and fonts asynchrously.
 */
export async function _cacheResourcesAsync() {
  const images = [];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  const fonts = Font.loadAsync({
    'public-sans': require('../../../assets/public-sans/fonts/webfonts/PublicSans-Regular.ttf'),
    'public-sans-bold': require('../../../assets/public-sans/fonts/webfonts/PublicSans-Bold.ttf'),
  });

  return Promise.all([...cacheImages, fonts]);
}

/**
 * HOC component that renders splash screen until assets are loaded.
 */
export default function withLoadingState(Component) {
    return function AppLoadedState(props) {
      const [loaded, setLoaded] = useState(false);

      return (loaded) ?
        <Component {...props} /> : (
        <AppLoading
          startAsync={_cacheResourcesAsync}
          onFinish={() => setLoaded(true)}
          onError={console.warn}
        />
      );
    }
}