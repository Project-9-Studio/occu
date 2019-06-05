import React from 'react';
import { Font } from 'expo';

export default function withLoadingState(Component) {
    class ProvideLoadedState extends React.PureComponent {
        state = { loaded: false };

        async componentDidMount() {
            await Font.loadAsync({
              'public-sans-bold': require('../../assets/public-sans/fonts/webfonts/PublicSans-Bold.ttf'),
            });
        
            this.setState({ loaded: true })
        }

        render() {
            return <Component {...this.props} loaded={this.state.loaded} />;
        }
    }

    return ProvideLoadedState;
}