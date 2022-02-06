const Reducer = (state, action) => {
    switch(action.type){
        case 'SAVE_PROSPECT_INFO':
            return {
                ...state,
                prospect: action.payload
            };
        case 'CLEAR_PROSPECT_INFO':
            return {
                ...state,
                prospect: action.payload
            }
            default: return state;
    }
};

export default Reducer;