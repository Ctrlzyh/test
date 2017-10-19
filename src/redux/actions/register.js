import IApp from '../../logic/IApp.js';
import * as TYPES from '../constants/actionsType.js';

export function registerStart(userInfo) {
    global.modal.open('RNLoading')
}

export function registerSuccess(userInfo) {
    return {
        type: TYPES.REGISTER_SUCCESS,
        userInfo,
    }
}

// export function registerFailure() {
//     global.modal.close();
//     return {
//         type: TYPES.REGISTER_FAILURE
//     }
// }

export function register(params,fn) {
    console.log('注册参数-------->',params);

    return async (dispatch) => {
        registerStart();
        const res = await IApp.register(params,fn);
        dispatch(registerSuccess(res));
    }
}