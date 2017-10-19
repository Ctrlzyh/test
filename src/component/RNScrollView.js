'use strict';

import React  from 'react';
import {
    StyleSheet,
    RefreshControl,
    ScrollView
} from 'react-native';

/**
 * 
 * @desc RNScrollView
 * @export 
 * @class RNScrollView
 * @extends {Component}
 */
const RNScrollView = ({...props})=> {
    const { 
        style,
        children,
        horizontal,
        refreshing,
        onRefresh,
        showsVerticalScrollIndicator ,
        showsHorizontalScrollIndicator ,
    } = props;

    return(
        <ScrollView
            style = { style }
            horizontal = { horizontal }
            scrollEventThrottle = {16}
            showsHorizontalScrollIndicator = { showsHorizontalScrollIndicator }
            showsVerticalScrollIndicator = { showsVerticalScrollIndicator } 
            refreshControl = {
                <RefreshControl 
                    refreshing = { refreshing }
                    onRefresh = { onRefresh }
                    tintColor = "#faaf45"
                    title="Loading..."
                    colors={['#000']}
                    progressBackgroundColor={"#fff"}
                />
            }
        >
            { children }
        </ScrollView>
    )
}

export default RNScrollView;