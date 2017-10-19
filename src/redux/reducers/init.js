const initialState = {
    initReducers:true
}

export default function (state = initialState, action){
    switch (action.type) {
        case 'initReducers':
            return {
                ...state,
            }
        default:
            return state
    }
}