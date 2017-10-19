import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, TextInput,DeviceEventEmitter } from 'react-native';
import RNTxtInput from '../../../component/Input/RNTxtInput.js';
const RNLoginForm = ({ ...props }) => {
    const params = {
        mobile: '',
        password: ''
    }
     //修改手机号
    const _onChangeMobile = rs=>{
        params['mobile'] = rs;
        DeviceEventEmitter.emit('login',params);
    }
    //修改密码
    const _onChangePwd = rs=>{
        params['password'] = rs;
        DeviceEventEmitter.emit('login',params);
    }

    return (
        <View style={styles.container}> 
            <RNTxtInput
                title='手机号'
                onChangeText={_onChangeMobile}
                paddingHorizontal={25}
                returnKeyType={'next'}
            />
             <RNTxtInput
                title='密码'
                onChangeText={_onChangePwd}
                paddingHorizontal={25}
                returnKeyType={'done'}
                secureTextEntry = {true}
                marginTop={10}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default RNLoginForm;
