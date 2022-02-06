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
            };
        case 'CREATE_MESSAGE':
            return {
                ...state,
                message: action.payload, 
                isVisible: true
            }
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                message: '',
                isVisible: false
            }
            default: return state;
    }
};

export default Reducer;