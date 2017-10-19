import React, { Component ,propTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Modal
} from 'react-native';

 class LoadingModal extends Component {
  state = {
		flag: false
  };
  open = () => {
		this.setState({
			flag: true
		});
  }
  close=()=>{
    this.setState({
      flag:false
    });
  }
  
  render() {
    // var loadingText = this.props.loadingText == null ? "加载中..." : this.props.loadingText;
    return (
      <Modal
       animationType={"none"}
		        transparent={true}
		        visible={this.state.flag}
		        onRequestClose={() => {}}
        >
        <View style={styles.loading}>
           <View style = { styles.box }>
            <ActivityIndicator size='large' color='#fff' />
            </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   box:{
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:5,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
});

export default LoadingModal;