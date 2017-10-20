import React, { Component } from 'react';
import { StyleSheet, View,Text,DeviceEventEmitter } from 'react-native';
import LoginFrom from './LoginFrom.js';
import RNButton from '../../../component/common/RNButton.js';

import * as action from '../../../redux/actions/login.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Login extends Component {
    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('login', this._onListener);
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
        PPZ.router.open('Register')(this.props.fn);
    }
    _resetpsd = () => {
        PPZ.router.open('Resetpsd')(this.props.fn);
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

})

function mapStateToProps(state) {
    return {
        userInfo: state.loginState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
