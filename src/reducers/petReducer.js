export default (state={pets:[], searchParams: {type:''}, currentPage:0}, action) => {
    switch (action.type) {
        case 'FILL_PETS':
            return {
                ...state,
                pets: [action.payload.animals],
                currentPage: action.payload.pagination.current_page
            }
        case 'CHANGE_TYPE':
            return {
                ...state,
                searchParams: {type: action.payload}
            }
        default:
            return state;
    }
}