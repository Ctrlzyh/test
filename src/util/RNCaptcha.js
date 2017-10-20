'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

/**
 * 
 * @desc 图片验证码
 * @export RNCaptcha
 */
class RNCaptcha extends Component{
    state = {
        reload:false
    }
    uri = { uri : global.PPZ.host + 'account/common/cc?type=register&time=' + new Date() }
    
    _onChangeCaptcha = ()=>{
        this.uri = { uri : global.PPZ.host + 'account/common/cc?type=register&time=' + new Date() };
        this.setState({
            reload:!this.state.reload
        })
    }
    render(){
        const { 
            height = 50,
            width = 100,
            backgroundColor = '#b6b6b6',
        } = this.props;

        const container = {
            backgroundColor,
            height,
            width,
            justifyContent:'center',
            alignItems:'center',
        }

        return(
            <TouchableOpacity 
                onPress = { this._onChangeCaptcha }
                style = { container }>
                <Image 
                    resizeMode = 'cover'
                    source = { this.uri }
                    style = { styles.img }
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        color:'#fff'
    },
    img:{
        height:50,
        width:100
    }
})
export default RNCaptcha;