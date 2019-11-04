import React from 'react';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	render(){
		const { product } = this.props;
		return (
		    <div  className="card mb-5" style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', marginBottom: "10px",margin:"0% 1%",maxWidth:'18rem'}}>
			  <div className="card-body">
			    <h4 className="card-title">{product.name}</h4>
			    <h5 className="card-text"><small>price: </small>₹{product.price}</h5>
			    <span className="card-text text-success"><small>Quantity: </small>{product.qty}</span>
			    
			    <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove from cart</button>

			  </div>
			</div>
			
		)
	}
}
