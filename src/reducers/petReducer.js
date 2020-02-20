export default (state={pets:[], currentPage:0}, action) => {
    switch (action.type) {
        case 'FILL_PETS':
            return {
                ...state,
                pets: [...state.pets, action.payload.animals],
                currentPage: action.payload.pagination.current_page
            }
        default:
            return state;
    }
}