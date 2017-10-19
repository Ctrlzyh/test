import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, TextInput } from 'react-native';
import Button from '../../component/common/RNButton.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../redux/actions/login.js';
class Account extends Component {
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

  _onLogin = async () => {
    const { actions } = this.props;
    actions.login();
  }

  render() {
    console.log('this.props------->', this.props)
    return (
      <View style={styles.container}>
        <Text>Account</Text>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeMobile}
        />
        <TextInput
          style={styles.input}
          onChangeText={this._onChangePwd}
        />
        <Button
          title='登录'
          onPress={this._onLogin}
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
    borderWidth: 1,
    marginTop: 20,
  }
})

function mapStateToProps(state) {
  return {
    userInfo: state.loginState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);

