export const setApplicationID = (id) => ({
    type: 'SET_APPLICATION_ID',
    payload: id
});
export const setMovingType = (movingTypeId, appId) => ({
    type: 'SET_MOVING_TYPE',
    payload: {
        movingTypeId,
        appId
    }
});
export const deleteDraftFromCart = (key) => ({
    type: 'DELETE_DRAFT',
    payload: key
});
export const changeDraftInCart = (key) => ({
    type: 'CHANGE_DRAFT',
    payload: key
});
