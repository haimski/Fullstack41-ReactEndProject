const loadCustomers = () => {
    return {
        type: 'LOAD_CUSTOMERS',
        payload: ''
    }
}

const addCustomer = (newCustomerData) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: newCustomerData
    }
}

const updateCustomer = (customerDataToUpdate) => {
    return {
        type: 'UPDATE_CUSTOMER',
        payload: customerDataToUpdate
    }
}

const deleteCustomer = (customerDataToDelete) => {
    return {
        type: 'DELETE_CUSTOMER',
        payload: customerDataToDelete
    }
}

const Actions = {
    loadCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer
}

export default Actions;