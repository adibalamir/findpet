export const changeType = (type) => dispatch => {
    dispatch({
        type: 'CHANGE_TYPE',
        payload: type
    })
}