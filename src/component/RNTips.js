'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const RNTips = ({ ...props })=>{
    const { 
        title='暂无数据',
        style,
        fontStyle
    } = props;
    
    return(
        <View style={ style }>
            <Text style={fontStyle}>{title}</Text>
        </View>
    )
}

export default RNTips;