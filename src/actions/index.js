export const addRestaurant = (text) => {
    return { 
        type: "ADD_RESTAURANT",
        text
    }
}

export const deleteRestaurant = (id) => {
    return {
        type: "DELETE_RESTAURANT",
    id
}
}

export const addReview = (review) => {
    return {
        type: 'ADD_REVIEW',
        review
    }
}

