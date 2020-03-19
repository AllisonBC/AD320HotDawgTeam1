import React, { Component } from 'react';


export default class QuantityIncrementor extends Component {
  constructor(props){
    super(props);
    this.state = { 
      quantity: 0 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (event) {
    this.setState({ quantity: event.target.value });
  }

  onSubmit (event) {    
    console.log(this.state.quantity);
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input  
          type="number" 
          id="quantity"
          className="quantity"  
          min="0"
          value={ this.state.quantity }
          onChange={ this.onChange } />
        <input
          type="submit" 
          value="Add to cart" 
          className="btn" /> 
      </form> 
    )
  }
}