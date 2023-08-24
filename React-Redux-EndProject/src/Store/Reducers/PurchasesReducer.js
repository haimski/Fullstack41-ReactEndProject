const initialState = {
    purchases: []
}

const purchasesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {...state};
    }
}

export default purchasesReducer;