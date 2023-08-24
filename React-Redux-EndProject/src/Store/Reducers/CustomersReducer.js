const initialState = {
    customers: [
        {
            "id": 1,
            "firstName": "Alice",
            "lastName": "Johnson",
            "city": "New York"
        },
        {
            "id": 2,
            "firstName": "Bob",
            "lastName": "Williams",
            "city": "Los Angeles"
        }
    ]
}

const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER': {
            return {...state, customers: [...state.customers, action.payload]};
        }
        case 'UPDATE_CUSTOMER': {
            const {customers = []} = state;
            const customerIndex = customers.findIndex(customer => customer.id === action.payload.id);
            if (customerIndex !== -1) {
                customers[customerIndex] = action.payload;
            }
            return {...state, customers};
        }
        case 'DELETE_CUSTOMER': {
            const newCustomers = state.customers.filter(customer => customer.id !== action.payload.id)
            return {...state, newCustomers};
        }
        default:
            return {...state};
    }
}

export default customersReducer;