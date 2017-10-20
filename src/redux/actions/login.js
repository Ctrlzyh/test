import * as TYPES from '../constants/actionsType.js';

import IApp from '../../logic/IApp.js';
//开始
export function loginStart(userInfo) {
   global.modal.open('RNLoading');
}
//成功
export function loginSuccess(userInfo) {
    
    return {
        type: TYPES.LOGIN_SUCCESS,
        userInfo,
    }
}
//失败
export function loginFailure() {
    
    return {
        type: TYPES.LOGIN_FAILURE
    }
}

//登录操作
export function login(params,fn) {
    return async (dispatch) => {
        loginStart();
            // 用户登录
        const res =await IApp.login(params,fn);
        console.log('返回的登录信息------->',res)
        PPZ.store=res;
        // const result2Data = await result.json();
        dispatch(loginSuccess(res));
    }
}