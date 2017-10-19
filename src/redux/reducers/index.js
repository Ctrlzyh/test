import { combineReducers } from 'redux';

import initState from './init.js';
import loginState from './login.js';
import register from './register.js'

const rootReducer = combineReducers({
    initState,//redux初始化 redux必须有一个state

    loginState,
    register
});
export default rootReducer;