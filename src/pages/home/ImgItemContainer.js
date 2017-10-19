import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const ImgItemContainer = ({...props})=> {
    const {
        marginBottom,
        marginTop,
        data,
        fn
    } = props;
const containerStyle = {
        height: PPZ.styles.height/3,
        marginTop: marginTop,
        marginBottom: marginBottom,
        backgroundColor: '#fff'
    }
_onImage=()=>{
    global.modal.open('RNImg',{data});
}
     return(
        <TouchableOpacity style={containerStyle} onPress={this._onImage}>
         <Image
         source={{uri:data.pics[0]}}
         resizeMode='stretch'
         style={{width:PPZ.styles.width,height:PPZ.styles.height/3}}
         />   
        </TouchableOpacity>
     )
}
    export default ImgItemContainer;
