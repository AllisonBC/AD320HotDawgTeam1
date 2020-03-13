
import '../Home/Home.css';

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class MenuItems extends Component {

  state={
    menus: [],
    menu: {
      price: 'Price',
      title:'Title',
      descript:'Description'
    }
  }

  componentDidMount(){
    this.getMenus();
  }

  
  getMenus=_=>{
    fetch('/api/menu')
      .then(response=>response.json())
      .then(response=>this.setState({menus:response.data}))
      .catch(err=>console.error(err))
  }
  
 addMenu=_=>{
    const{menu} = this.state;
    fetch(`http://localhost:4000/api/menu/add?price=${menu.price}&title=${menu.title}&discript=${menu.descript}`)
    .then(this.getMenus)
    .catch(err=>console.error(err))
  }




renderMenu=({dogId,title})=><div key={dogId}>{title}</div>


  render() {
    const {menus,menu}=this.state;
    return(
      
    
          <div className="MenuItems">
            <div className="AddMenu"> 
              <input value = {menu.title}
               onChange={e=>this.setState({menu: {...menu, title:e.target.value}})}/> 
              <input value = {menu.price}
               onChange={e=>this.setState({menu: {...menu, price:e.target.value}})}/>
              <input value = {menu.descript}
               onChange={e=>this.setState({menu: {...menu, descript:e.target.value}})}/>
            </div>
            <button onClick={this.addMenu}> Add Menu </button>
          
              <h1>{menus.map(this.renderMenu)}</h1>
            </div>
    )
  }
}

export default MenuItems;
