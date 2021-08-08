const initialState = {
    token: null,
    userId: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                token: action.payload.jwtToken,
                userId: action.payload.id
            }
        default:
            return state
    }
}

export default user;