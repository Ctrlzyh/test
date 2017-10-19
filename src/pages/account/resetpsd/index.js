import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, TextInput } from 'react-native';
import Button from '../../../component/common/RNButton.js';
import IApp from '../../../logic/IApp.js';
class Resetpsd extends Component {
  params = {
    mobile: '',
    password: '',
  }

  _onChangeMobile = rs => {
    this.params.mobile = rs;
  }
  _onChangePwd = rs => {
    this.params.password = rs;
  }

  _onresetpsd = async ({params}) => {
      console.log('重置信息----->',this.params)
    await IApp.resetpsd(this.params);
  }

  render() {
    console.log('this.props------->', this.props)
    return (
      <View style={styles.container}>
        <Text>重置密码</Text>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeMobile}
        />
        <TextInput
          style={styles.input}
          onChangeText={this._onChangePwd}
        />
        <Button
          title='立即重置'
          onPress={this._onresetpsd}
          marginTop={10}
          width={100}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 20,
  }
})

export default Resetpsd;