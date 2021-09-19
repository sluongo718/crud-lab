import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

import {connect} from "react-redux";
import {addReview} from "../actions/index";

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restuarantId={this.props.restuarantId} addReview={this.props.addReview} />
        <Reviews />
      </div>
    )
  }
}

export default connect((state) => ({reviews: state.reviews}), {addReview})(ReviewsContainer);
