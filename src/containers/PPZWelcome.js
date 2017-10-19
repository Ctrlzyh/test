/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoginFrom from '../pages/account/Login/LoginFrom.js';
import RNButton from '../component/common/RNButton.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *  as  loginActions from '../redux/actions/login.js'

class PPZWelcome extends Component {

    componentDidMount() {
        // IApp.adPageCountTime(this);
        this.canClick = true;
        // this.timer = setTimeout(()=>{
        //       PPZ.router.resetTo('dashboard')(this)
        // }, 2000);
        this.subscription = DeviceEventEmitter.addListener('login', this._onListener);
    }

    // componentWillUnmount() {
    //     this.timer && clearTimeout(this.timer);
    // }
    //跳过 welcome
    _onOpenRoute = () => {
        if (this.canClick) {
            PPZ.router.resetTo('dashboard')(this)
            return;
        }
    }
    _onListener = cb => {
        if (typeof cb === 'object') {
            this.params = cb;
            return;
        }
    }
    componentWillUnmount() {
        this.subscription.remove();
    }
    params = {
        mobile: '',
        password: ''
    }
    //登录
    _onLogin = async () => {
        console.log('this.params------>', this.params);
        const { actions } = this.props;
        console.log('this.props-------->', this.props);
        await actions.login(this.params, this);
    }
    _register = () => {
        PPZ.router.open('Register')(this);
    }
    _resetpsd = () => {
        PPZ.router.open('Resetpsd')(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginfrom}>
                    <LoginFrom />
                    <RNButton
                        title='立即登录'
                        marginTop={120}
                        fontSize={16}
                        borderRadius={27}
                        marginHorizontal={50}
                        onPress={this._onLogin}
                    />
                    <View style={styles.textview}>
                        <Text style={styles.text} onPress={this._register}>立即注册</Text>
                        <Text style={styles.text} onPress={this._resetpsd}>忘记密码</Text>
                    </View>
                </View>
                <View style={styles.jumpContainer}>
                    <TouchableOpacity style={styles.btnContainer} onPress={this._onOpenRoute}>
                        <Text style={styles.btnTxt}>跳过</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: PPZ.styles.height,
        width: PPZ.styles.width,
        backgroundColor: '#ff6347'
    },
    jumpContainer: {
        position: 'absolute',
        right: 25,
        top: 40,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    btnContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    loginfrom: {
        marginTop: PPZ.styles.height / 3,
    },
    textview: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: 'white',
        fontSize: 14
    }
});

function mapStateToProps(state) {
    return {
        userInfo: state.loginState
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PPZWelcome);
// export default PPZWelcome;

