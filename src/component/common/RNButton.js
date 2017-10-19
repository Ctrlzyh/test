'use strict';

import React ,{ PropTypes }from 'react';

import {
    Text,
    TouchableOpacity
} from 'react-native';

const propTypes = {

};
/**
 * @desc 按钮
 * @author com.ppz.zl
 * @dateTime 2017年06月14日17:50:28
 * @version v1
 * @param {*String} title 文本
 * @param {Number} height 高度
 * @param {String} color 文本颜色
 * @param {String} backgroundColor 背景色 
 * @param {Function} onPress 点击事件 
 * @param {Number} fontSize 字体大小
 */
const RNButton = ({...props})=>{
    const {
        title,
        width,
        height=54,
        color='#fff',
        fontSize,
        borderColor,
        borderWidth,
        backgroundColor='#ffa07a',
        borderRadius,
        marginTop,
        onPress,
        marginHorizontal,
        disabled,
    } = props;

    const container = {
        width,
        height,
        backgroundColor,
        borderColor,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal,
        marginTop,
        borderWidth,
        borderRadius,
    }
    const activeBtnStyle = {
        backgroundColor,
    }
    const inactiveBtnStyle = {
        backgroundColor:'#b6b6b6',
    }
    const titleStyle = {
        color,
        fontSize
    }

    return(
        <TouchableOpacity 
            onPress={ onPress }
            style = { [container , disabled ? inactiveBtnStyle : activeBtnStyle ] }
            disabled= { disabled }>
            <Text style={ titleStyle }>{title}</Text>
        </TouchableOpacity>
    )
}
RNButton.propTypes = propTypes;

export default RNButton;