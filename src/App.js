import React, { Component } from 'react';
import { View, Text, AppState  } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Index from './components/index'
class App extends Component {
    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        console.log(nextAppState)
        this.setState({appState: nextAppState});
    }

    render() {
        return (
            <Index/>
        );
    }
}

export default App;