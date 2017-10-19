import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  InteractionManager,
  Button
} from 'react-native';
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation'



class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  _onBack = () => {
    PPZ.router.back(null)(this);
  }
  render() {
    console.log('navigator----->', navigator)
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text onPress={this._onBack}>Chat with {params.user}</Text>
      </View>
    );
  }
}

export default ChatScreen;