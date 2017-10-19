import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppState,
    NetInfo,
    BackHandler
} from 'react-native';

import EXNavigator from './EXNavigator.js';
import Modal from '../component/Modal';

class App extends PureComponent {
    componentDidMount() {
        this.listenerGroup();
    }
     NET_INFO = {
    // 'none':'设备处于离线状态',
    'wifi':'WIFI数据连接',
    'cell':'移动网络数据连接',
    'unknown':'网络异常',
    // 'NONE':'设备处于离线状态',
    'MOBILE': '移动网络数据连接',
    'WIFI': 'WIFI数据连接',
    'UNKNOWN': '未知数据连接',
}
    listenerGroup() {
        console.log('---------------启动全局监听---------------')
        AppState.addEventListener('change', this._handleAppStateChange);
        NetInfo.addEventListener('change', this._handleNetInfoChange);
       
    }
   
    //添加app状态
    _handleAppStateChange = appState=>{
        console.log(`app当前激活状态------------->${appState}`);
        global.PPZ.appState = appState;

        if (appState.match(/inactive|background/) && appState === 'active') {
            console.log('App has come to the foreground!')
            global.PPZ.appState = 'active';
            //1.恢复刷新token???
            return;
        }
        global.PPZ.appState = 'exit';
    }
    //网络回调函数
    _handleNetInfoChange = netInfoState=>{
        console.log(`上次网络状态-->(${global.PPZ.netInfoState})/当前网络状态-->(${netInfoState})`);
        if( PPZ.cache.canOpenNetModal && NET_INFO[netInfoState]){
            global.modal.openTrans('RNToast',{tips:NET_INFO[netInfoState]});
        }
        global.PPZ.netInfoState = netInfoState;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <EXNavigator />
                <Modal ref={view => { global.modal = view }} />
            </View>
        )
    }
}



export default App