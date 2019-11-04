import React from 'react';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		console.log('cart,id,cart[id]', cart," ",id," ",cart[id])
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}  

	render(){
		const { product } = this.props;
		console.log("images  are..", product.imgURL);
		return (
			<div class="card border-dark mb-3" style={{maxWidth:'18rem'}} >
				 <img src={product.imgURL} class="card-img-top" alt="..."></img>
  <div class="card-header text-success" style={{fontSize:"25px"}}>₹{product.price}</div>
  <button type="button" class="btn btn-dark" onClick={this.addToCart} style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>Add To Cart</button>
  <div class="card-body text-dark">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.description}</p>
  </div>
</div>
		) 
	}
}
