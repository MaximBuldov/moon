export const setUserData = (jwtToken, id) => ({
    type: 'SET_USER_DATA',
    payload: {jwtToken, id}
})