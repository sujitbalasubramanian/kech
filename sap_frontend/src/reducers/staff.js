const staffReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case 'GET_ALL_STAFF':
            return {...state, data: action.payload}
        default:
            return {...state}
    }
}

export default staffReducer
