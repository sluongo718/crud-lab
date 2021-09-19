import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

import { connect } from "react-redux";
import { addRestaurant, deleteRestaurant} from "../actions/index";

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant}
        restaurants={this.props.restaurants} />
      </div>
    )
  }
}


export default connect((state) => ({ restaurants: state.restaurants }), { addRestaurant, deleteRestaurant})(RestaurantsContainer);
