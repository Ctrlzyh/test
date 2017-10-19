import React, { Component } from 'react';
import { AppRegistry, Text,Image } from 'react-native';

class More extends Component {
  render() {
    return (
      <Image
      source={{uri:'http://7xvvpv.com1.z0.glb.clouddn.com/splash.png'}}
      style={{width:200,height:300}}
      resizeMode='contain'
      />
    );
  }
}

export default More;