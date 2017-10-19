import React ,{ Component }from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import LoginFrom from '../Login/LoginFrom.js';
import RNButton from '../../../component/common/RNButton.js';

class LoginModal extends Component{
params = {
        mobile:'',
        password:''
    } 
    //登录
    _onLogin = async ()=>{
        // console.log('this.params------>',this.params);
        //  const { actions } = this.props;
        //  console.log('this.props-------->',this.props);
        //  await actions.login(this.params);
      const _onLogin = () => {
                console.log('123')
            }
            const _onClose = () => {
               global.modal.close();
            }
            const data = {
                tips: '111111',
                buttons: [
                    { title: '登录', cb: _onLogin },
                    { title: '取消', cb: _onClose },
                ]
            }
            global.modal.open('RNAlert', data);
    } 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginfrom}>
                    <LoginFrom />
                    <RNButton
                        title='立即登录'
                        marginTop={120}
                        fontSize={16}
                        borderRadius={27}
                        marginHorizontal={50}
                         onPress={this._onLogin}
                         />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: PPZ.styles.height,
        width: PPZ.styles.width,
        backgroundColor: '#ff6347'
    },
  
    loginfrom: {
        marginTop: PPZ.styles.height / 3,
    },
});
export default LoginModal;