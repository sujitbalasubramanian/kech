const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('sap_portal', JSON.stringify({...action.payload}))
            return {...state}
        default:
            return {...state}
    }
}

export default authReducer
