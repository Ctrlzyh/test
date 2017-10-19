'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	StyleSheet,
	View,
	Modal,
	TouchableHighlight,
	Text
} from 'react-native';

class AlertModal extends Component {
	state = {
		flag: false
	};

	static propTypes = {
		btnLeftText: PropTypes.string,
		btnRightText: PropTypes.string,
		leftFunc: PropTypes.func,
		rightFunc: PropTypes.func,
		title: PropTypes.string.isRequired,
		msg: PropTypes.string.isRequired
	};
	static defaultProps = {
		btnLeftText: '确定',
		//btnRightText: '取消',
		leftFunc: () => { },
		rightFunc: () => { },
		title: 'Confirm',
		msg: '这个是提示信息！'
	}
	open = () => {
		this.setState({
			flag: true
		});
	}
	_onLeftPress = () => {
		this.props.leftFunc();
		this.setState({
			flag: false
		});
	}
	_onRightPress = () => {
		this.props.rightFunc();
		this.setState({
			flag: false
		});
	}
	render() {
		if(!this.props.btnRightText){
			return(
				<Modal animationType={"none"}
				transparent={true}
				visible={this.state.flag}
				onRequestClose={() => { }}>
				<View style={styles.confirmModal}>
					<View style={styles.confirm}>
						<View style={styles.title}>
							<Text style={styles.titleCon}>{this.props.title}</Text>
						</View>
						<View style={styles.content}>
							<Text style={styles.text}>{this.props.msg}</Text>
						</View>
						<View style={styles.btn}>
							<TouchableHighlight underlayColor='#eee' onPress={this._onLeftPress} style={styles.btnClick}>
								<View style={[styles.btnView, styles.btnLeft]}>
									<Text style={styles.btnText}>{this.props.btnLeftText}</Text>
								</View>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</Modal>
			)
		}
		return (
			<Modal animationType={"none"}
				transparent={true}
				visible={this.state.flag}
				onRequestClose={() => { }}>
				<View style={styles.confirmModal}>
					<View style={styles.confirm}>
						<View style={styles.title}>
							<Text style={styles.titleCon}>{this.props.title}</Text>
						</View>
						<View style={styles.content}>
							<Text style={styles.text}>{this.props.msg}</Text>
						</View>
						<View style={styles.btn}>
							<TouchableHighlight underlayColor='#eee' onPress={this._onLeftPress} style={styles.btnClick}>
								<View style={[styles.btnView, styles.btnLeft]}>
									<Text style={styles.btnText}>{this.props.btnLeftText}</Text>
								</View>
							</TouchableHighlight>
							<View style={styles.line}></View>
							<TouchableHighlight underlayColor='#eee' onPress={this._onRightPress} style={styles.btnClick}>
								<View style={styles.btnView}>
									<Text style={styles.btnText}>{this.props.btnRightText}</Text>
								</View>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	confirmModal: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: 'rgba(0,0,0,.45)'
	},
	confirm: {
		width: PPZ.styles.width * 3 / 4,
		backgroundColor: 'rgba(255,255,255,1)',
		marginHorizontal: 20,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		overflow: 'hidden'
	},
	title: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 45,
		borderBottomColor: '#eee',
		borderBottomWidth: .5
	},
	titleCon: {
		textAlign: 'center',
		fontSize: 18,
		color: '#faaf45'
	},
	content: {
		paddingTop: 10,
		paddingBottom: 10,
		marginTop: 5,
		marginBottom: 5,
		minHeight: 110,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#999',
		fontSize: 16
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 45,
		overflow: 'hidden'
	},
	btnClick: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderColor: '#dedede',
	},
	btnText: {
		textAlign: 'center',
		textAlignVertical: 'center',
		overflow: 'hidden',
		color: '#faaf45',
	},
	btnView: {
		flex: 1,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
	},
	line:{
		width:StyleSheet.hairlineWidth,
		height:16,
		alignItems: 'center',
		backgroundColor:'#dedede'
	}
});


export default AlertModal;