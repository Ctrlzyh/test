import React, { Component } from 'react';
import { Text } from 'react-native';

class EXHomeDetail extends Component {
    _back=()=>{
        PPZ.router.back(null)(this)
    }
  render() {
    return (
      <Text style={{marginTop:100}} onPress={this._back}>点我返回</Text>
    );
  }
}

export default EXHomeDetail;