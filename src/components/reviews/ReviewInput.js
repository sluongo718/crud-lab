import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
    state = {text: ""}

    handleOnChange = (event) => {
        this.setState({
          text: event.target.value
        })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addReview({
        text: this.state.text,
        restaurantId: this.props.restaurantId
      })
      this.setState({text: ""})
    }
  
  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit} >
         <input type="text" placeholder="review here"
                 value={this.state.text} onChange={this.handleOnChange}
        ></input>
         <input type="submit"></input>
       </form>
      </div>
    );
  }
};

export default ReviewInput;


