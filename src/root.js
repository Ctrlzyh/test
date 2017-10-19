// import React, { PureComponent } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     AppRegistry
// } from 'react-native';

// import EXNavigator from './containers/EXNavigator.js';
// import Modal from './component/Modal';
// class App extends PureComponent{
    
//     render(){
        
//         return(
//            <View style={{flex:1}}>
//             <EXNavigator />
//             <Modal ref={ view => { global.modal = view} } />
//            </View>
//         )
//     }
// }

// AppRegistry.registerComponent('simpleApp', () => App);

// export default App

import React ,{Component} from 'react';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';

import App from './containers/App.js';

const store = configureStore();

const Root =()=>(
        <Provider store={store}>
            <App/>
        </Provider>
    );

export default Root;