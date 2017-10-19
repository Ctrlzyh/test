'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';


/**
 * @desc 显示方式 ----- 文本-输入框
 * @param {*} param0 
 */
const RNTxtInput = ({ ...props })=> {
    const { 
        title,
        placeholder,
        returnKeyType,
        onChangeText,
        onSubmitEditing,
        onEndEditing,
        onBlur,
        onFocus,
        children,
        secureTextEntry,//以下样式
        marginTop,
        marginBottom,
        marginHorizontal,
        paddingLeft,
        paddingRight,
        paddingBottom = 5,
        paddingHorizontal,
        height = 50,
        backgroundColor,
        borderWidth,
        placeholderTextColor,
        titleStyle,
    } = props;

    const containerStyle = {
        height,
        marginTop,
        marginBottom,
        marginHorizontal:50,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingHorizontal,
        backgroundColor:'#ff6347',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:35,
        borderColor:'white',
    }
    return(
        <View  style = { containerStyle }>
            {
                title 
                ? <Text style = { styles.title }>{title}</Text>
                : null
            }
            
            <TextInput
                autoCapitalize = 'none' 
                underlineColorAndroid = 'transparent'
                secureTextEntry = { secureTextEntry }
                clearButtonMode = {'while-editing'}
                placeholder = { placeholder }
                selectionColor = '#dedede'
                blurOnSubmit = {true}
                style = { [styles.container,titleStyle] }
                returnKeyType = { returnKeyType }
                onChangeText = { onChangeText }
                onSubmitEditing = { onSubmitEditing }
                onEndEditing = { onEndEditing }
                onBlur = { onBlur }
                onFocus = { onFocus }
                placeholderTextColor = { placeholderTextColor }
            />
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        color:'white',
        height:50,
    },
    title:{
        marginTop:5,
        color:'white',
        width:50
    }
})
export default RNTxtInput;