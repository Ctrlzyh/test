import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, TextInput } from 'react-native';
import Button from '../../../component/common/RNButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as registerActions from '../../../redux/actions/register.js';

class Register extends Component {
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

  _onregister = async () => {
    console.log('actions------>',this.props);
    console.log('this.params------>',this.params);

    const { registerActions } = this.props;
    //1.传参到网络请求方法
    registerActions.register(this.params,this);
  }

  render() {
    console.log('this.props------->', this.props)
    return (
      <View style={styles.container}>
        <Text>注册</Text>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeMobile}
        />
        <TextInput
          style={styles.input}
          onChangeText={this._onChangePwd}
        />
        <Button
          title='注册'
          onPress={this._onregister}
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

function mapStateToProps(state) {
  return {
    userInfo: state.register
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(registerActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);

