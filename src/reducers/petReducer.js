export default (state={pets:[], currentPage:0}, action) => {
    switch (action.type) {
        case 'FILL_PETS':
            return [...state.pets, action.payload]
        default:
            return state;
    }
}