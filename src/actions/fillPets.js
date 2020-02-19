export const fillPets = (pets) => dispatch => {
    dispatch({
        type: 'FILL_PETS',
        payload: pets
    })
}