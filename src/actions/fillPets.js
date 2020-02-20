import axios from 'axios';

export const fillPets = (access_token, type) => dispatch => {
    axios({
        url: `https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type=${type}`,
        headers: {
            'Authorization': 'Bearer '+access_token
        },
        method: 'get'
        })
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'FILL_PETS',
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err)
    })
}