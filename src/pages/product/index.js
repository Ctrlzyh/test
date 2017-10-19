import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

class Product extends Component {
  _Onmotai=()=>{
    const _onCall = ()=> {
        global.modal.open('LoginModal');
    }
    const _onClose = ()=>{
      console.log('123')
    }
     const data = {
        tips: '是否立即拨打客服电话\n4000-689-360？',
        buttons:[
            { title:'确定' ,cb: _onCall },
            { title:'取消' ,cb: _onClose },
        ]
    }
    console.log('123')
    global.modal.open('RNAlert',data);
  }
  render() {
    return <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#e0e0e0'/>
      <View style={styles.group}>
      <Text style={{fontSize:20}} onPress={this._Onmotai}>motai</Text>
      </View>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  scrollView: {
    ...Platform.select({
      android: {
        backgroundColor: '#f5f5f5',
      },
    })
  },
  container: {
    paddingBottom: 15,
  },
  group: {
    marginTop: 15,
  },
  item: {
    padding: 15,
    backgroundColor: '#fff',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#424242',
  },
})

export default Product;



  // state = {
  //   showProgress: false,
  // }
  // _close = () => {
  //   this.refs.loading.open();
  //   setTimeout(() => {
  //     this.refs.loading.close();
  //   }, 3000);
  // }
  // _confirmOne = () => {
  //   console.log("this.refs-------->",this.refs)
	// 	this.refs.oneconfirm.open();
  // }
  // _confirmTwo = () => {
  //   console.log("this.refs-------->",this.refs)
	// 	this.refs.twoconfirm.open();
	// }
  // _view=()=>{
  //   PPZ.router.open('webview', {url: 'http://m.hupu.com',title:'虎扑'})(this)
  // }
  // _modal=()=>{
  //   global.modal.open('RNAlert',{tips:'您的vip等级已经最高,不能在兑换了'});
  // }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //        <Text style={styles.text} onPress={this._view}>webview</Text>
  //         <Text style={styles.text} onPress={this._close}>Loading模态框</Text>
  //         <LoadingModal ref='loading' />
  //       <AlertModal ref='oneconfirm' leftFunc={() => {}} btnLeftText='确定' title='RNAlert' msg='这个是提示内容！'/>
  //         <Text style={styles.text} onPress={this._confirmOne}>RNAlert</Text>
  //       <AlertModal ref='twoconfirm' leftFunc={() => {}} rightFunc={() => {}} btnLeftText='确定' btnRightText='取消' title='RNAlert' msg='这个是提示内容！'/>
  //         <Text style={styles.text} onPress={this._confirmTwo}>RNAlert</Text>
  //         <Text style={styles.text} onPress={this._modal}>RNAAAAA</Text>
  //     </View>
  //   );
  // }