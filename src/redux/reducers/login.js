const initialState = {
    userInfo:{},
    lastLoginTime:new Date(),
}

export default function (state = initialState, action){
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                userInfo: action.userInfo.data,
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
            }
        default:
            return state
    }
}