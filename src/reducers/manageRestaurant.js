import cuid from 'cuid';
import { applyMiddleware } from 'redux';
import { combineReducers } from "redux";

 function manageRestaurants(state = [], action) {

        switch (action.type) {
            case "ADD_RESTAURANT": 
                return state.concat({id: cuid(), text: action.text}) 
                
            case "DELETE_RESTAURANT": 
                return state.filter((restaurant) => restaurant.id !== action.id);
                
                
                default: return state
        }
}

const manageReviews = (state = [], action) => {
    switch(action.type) {
        case "ADD_REVIEW": 
        return state.concat({
            id: cuid(), 
            text: action.review.text,
            restaurantId: action.review.restaurantId   
        })

        default: return state

        }
}

export default combineReducers({restaurants: manageRestaurants, reviews: manageReviews})