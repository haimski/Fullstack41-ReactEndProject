const loadProducts = () => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: ''
    }
}

const addProduct = (newProductData) => {
    return {
        type: 'ADD_PRODUCT',
        payload: newProductData
    }
}

const updateProduct = (productDataToUpdate) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: productDataToUpdate
    }
}

const deleteProduct = (productDataToDelete) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: productDataToDelete
    }
}

export default {
    loadProducts,
    addProduct,
    updateProduct,
    deleteProduct
}