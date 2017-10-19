import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    InteractionManager
} from 'react-native';

import * as Modals from './ModakConfig.js';

class RNModal extends Component{
    state = {
        modalVisible:false,
        transparent:true,
        animationType:'fade',
        component:null
    }
    passProps;

    componentWillReceiveProps(nextProps){
        console.log('modal nextProps----------->',nextProps);
    }
    //打开模态框
    open = (name , props, animationType='fade')=> {
        this.passProps = props;
        // console.log('props------>',props)
        this.setState({
            modalVisible: true,
            component: Modals[name],
            animationType: animationType
        })
    }

    //关闭模态框
    close = ()=> {
        return new Promise((resolve, reject)=>{
            this.setState({
                modalVisible:false
            },()=>{ 
                resolve() 
                // this.timer = setTimeout(()=>{
                //     resolve() 
                // },800)
            })
        });
    }

    render(){
        const Com = this.state.component;
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        
        if(this.state.animationType==='slide'){
            if(this.state.modalVisible ===false){
                return null;
            }
            return(
                <View style={[styles.slideContainer,modalBackgroundStyle]}>
                    <Modal 
                        animationType={this.state.animationType}
                        transparent={this.state.transparent}
                        visible={this.state.modalVisible}
                        onShow={() => console.log('显示模态框------------>')}
                        onRequestClose={() => console.log('关闭模态框------------>')}
                    >
                        {Com && <Com passProps={this.passProps}/>}
                    </Modal>
                </View>
            )
        }

        return(
            <Modal 
                animationType={this.state.animationType}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}
                onRequestClose={() => console.log('关闭模态框------------>')}
            >
                <View style={[styles.container,modalBackgroundStyle]}>
                    {Com && <Com passProps={this.passProps}/>}
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    slideContainer:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default RNModal;
