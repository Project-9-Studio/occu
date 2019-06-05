import React from 'react';
import { AppLoading, Font } from 'expo';

export default function withLoadingState(Component) {
    class ProvideLoadedState extends React.PureComponent {
        state = { loaded: false };

        render() {
            if (!this.state.loaded) {
                return (
                  <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={this._onFinish}
                    onError={console.warn}
                  />
                );
            }
            return <Component {...this.props} />;
        }

        _onFinish = () => this.setState({ loaded: true });

        async _cacheResourcesAsync() {
            const images = [];
        
            const cacheImages = images.map((image) => {
              return Asset.fromModule(image).downloadAsync();
            });

            const fonts = Font.loadAsync({
              'public-sans': require('../../assets/public-sans/fonts/webfonts/PublicSans-Regular.ttf'),
              'public-sans-bold': require('../../assets/public-sans/fonts/webfonts/PublicSans-Bold.ttf'),
            });

            return Promise.all([...cacheImages, fonts]);
        }
    }

    return ProvideLoadedState;
}