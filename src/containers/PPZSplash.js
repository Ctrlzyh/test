/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  AppRegistry,
  InteractionManager,
  Button
} from 'react-native';
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';
import IApp from '../logic/IApp.js'

class PPZSplash extends Component {
  uri = 'http://7xvvpv.com1.z0.glb.clouddn.com/splash.png';
  componentDidMount() {
    InteractionManager.runAfterInteractions(this._onInit);
  }
  _onInit = async () => {
    await IApp.fetchImage();
    this.timer = setTimeout(() => {
      PPZ.router.resetTo('welcome')(this);
    }, 500);
  }

  render() {
    return (
      <Image
        resizeMode='stretch'
        source={{ uri: this.uri }}
        style={styles.container} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: PPZ.styles.height,
    width: PPZ.styles.width,
  }
});


export default PPZSplash;
// class RecentChatsScreen extends Component {
//   render() {
//     return <Text>List of recent chats</Text>
//   }
// }

// class AllContactsScreen extends Component {
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

// export default SimpleApp = StackNavigator({
//   Home: { screen: PPZSplash },
//   Chat: { screen: ChatScreen },
// });

// export default  MainScreenNavigator = TabNavigator({
//   Recent: { screen: RecentChatsScreen },
//   All: { screen: AllContactsScreen },
// });



          // {
          //   const resetAction = NavigationActions.reset({
          //     index: 0,
          //     actions: [
          //       NavigationActions.navigate({ routeName: 'welcome', params: { user: 'Lucy' } })
          //     ]
          //   })
          //   this.props.navigation.dispatch(resetAction);
          // }

