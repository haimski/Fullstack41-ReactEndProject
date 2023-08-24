const initialState = {
    products: [
        {
            "id": 1,
            "name": "Super Nintendo",
            "price": 100,
            "quantity": 5
        },
        {
            "id": 2,
            "name": "Sega Genesis",
            "price": 75,
            "quantity": 3
        }
    ]
}

const productsReducer = (state  = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return {...state, products: [...state.products, action.payload]};
        }
        case 'UPDATE_PRODUCT': {
            const {products} = state;
            const productIndex = products.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                products[productIndex] = action.payload;
            }
            return {...state, products};
        }
        case 'DELETE_PRODUCT': {
            const newProducts = state.products.filter(product => product.id !== action.payload.id)
            return {...state, newProducts};
        }
        default:
            return {...state};
    }
}

export default productsReducer;