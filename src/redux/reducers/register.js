const initialState = {
    userInfo:{},
}


export default function (state = initialState, action){
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                userInfo: action.userInfo.data,
            }
        case 'REGISTER_FAILURE':
            return {
                ...state,
            }
        default:
            return state
    }
}