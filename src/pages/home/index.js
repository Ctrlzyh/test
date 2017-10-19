import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import RNScrollView from '../../component/RNScrollView.js'
import ImageItem from './ImageItem.js'
import IApp from '../../logic/IApp.js'

class Home extends Component {
  state = {
    reload: false,
    refreshing: false,
  }
  //下拉刷新
  _onRefresh = async () => {
    if (this.state.refreshing) {
      return
    }
    this.setState({
      refreshing: true
    })
     await this._onFetchData();
    this.setState({
      refreshing: false
    })
  }
  _onFetchData = async () => {
    await IApp.fetchImage();
  }
  render() {
    return (
      <View style={styles.container}>
        <RNScrollView
          style={styles.scrollView}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          showsVerticalScrollIndicator={false}
        >
          <ImageItem
            fn={this}
            data={PPZ.cache['imageList']}
          />
        </RNScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: PPZ.styles.backgroundColor,
    borderBottomWidth: PPZ.styles.onePx,
    backgroundColor: PPZ.styles.backgroundColor
  },
  scrollView: {
    flex: 1,
  },

})
export default Home;

// class Home extends Component {
//   // static navigationOptions = ({ navigation }) => {
//   //   const { state, setParams, navigate } = navigation;
//   // }
//     _onPush=()=>{
//         PPZ.router.open('homeDetail')(this);
//         // PPZ.router.resetTo('homeDetail')(this)
//     }
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Text style={{marginTop:100}} onPress={() => { navigate('homeDetail') }}>点跳转</Text>
//     );
//   }
// }

// export default Home;