import React, { PropTypes } from 'react';
import Image from 'react-native-transformable-image';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const RNImg = ({ ...props }) => {
    const uri = props.passProps.data.pics[0]
    const _onPress = async () => {
        await global.modal.close();
    }

    return (
        <View style={styles.container}>

            <Image
                source={{ uri: uri }}
                style={{
                    height: PPZ.styles.height ,
                    width: PPZ.styles.width
                }}
            //pixels={{width: 3607, height: 2400}}
            >
                <TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={_onPress}>
                    <Text style={styles.btnTxt}>返 回</Text>
                </TouchableOpacity>
            </Image>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: PPZ.styles.height,
        width: PPZ.styles.width,
        backgroundColor: 'transparent'
    },
    btnTxt: {
        textAlign: 'center',
        marginTop: 18,
        fontSize: 18,
        color: 'white'
    }

})

export default RNImg;