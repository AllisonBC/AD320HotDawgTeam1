import React, { Component } from 'react';


export default class QuantityIncrementor extends Component {
  state = { quantity: 0 };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateQuantity(this.state.quantity);
    console.log(this.menuItem.quantity);
  }

  onChange = (event) => this.setState({ quantity: event.target.value });
  

  incrementCount = () => {
    this.setState({ quantity: this.menuItem.quantity + 1 });    
  }

  decrementCount = () => {
    this.setState({ quantity: this.menuItem.quantity - 1 });    
  }


  render() {
    // const { id, quantity } = this.props.menuItem;
    return (
      <div>

        <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
          <input  
            type="number" 
            name="quantity" 
            value={ this.state.quantity }             
            onChange={ this.props.onChange }   
            min="0"          
          />

          <button 
            onClick={ this.props.incrementCount }>+</button>          
          <button 
            onClick={ this.props.decrementCount }>-</button> 
 
        </form> 
        </div>
    )
  }
}