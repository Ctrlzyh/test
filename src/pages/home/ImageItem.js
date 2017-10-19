import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import ImgItemContainer from './ImgItemContainer.js';
import RNTips from '../../component/RNTips.js';

const IndexList = ({...props}) => {
    const { 
        data,
        fn
    } = props;
    if (data) {
        return (
            <View style={styles.container}>
            {
                data.map((it, i) => {
                    return (
                        <ImgItemContainer
                            key={'productIndex' + i}
                            marginTop={3}
                            data={it} 
                            fn={fn}
                        />
                    )
                })
            }
            </View>
        )
    }
    return (
        <View style={styles.tipsContainer}>
            <RNTips 
                style={styles.tips} 
                fontStyle={styles.fontStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tipsContainer:{
        height: PPZ.styles.viewHeight - PPZ.styles.tabBarHeight - 160,
    },
    tips:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f3f3f3'
    },
    fontStyle:{
        color:'#ccc'
    }
})
export default IndexList;