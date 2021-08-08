const initialState = {
    items: {},
    currentApp: null
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APPLICATION_ID':
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {}
                },
                currentApp: action.payload
            }
        case 'SET_MOVING_TYPE':
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.appId]: {
                        movingType: action.payload.movingTypeId
                    }
                },
            }
        case 'DELETE_DRAFT':
            delete state.items[action.payload];
            return {
                ...state,
                items: {
                    ...state.items
                }
            }
            case 'CHANGE_DRAFT':
            return {
                ...state,
                currentApp: action.payload
            }
        default:
            return state
    }
}

export default cart;