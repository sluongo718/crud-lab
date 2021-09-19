import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {

      const renderRestaurant = () => this.props.restaurants.map((restaurant) => (
              <Restaurant
                key={restaurant.id} restaurant={restaurant}
                deleteRestaurant={this.props.deleteRestaurant}
              />       
      ))

    return(
      <ul>
       {renderRestaurant()}
      </ul>
    );
  }
};

export default Restaurants;

