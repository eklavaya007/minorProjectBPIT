import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';
import "../index.css"

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {products: []};
		this.search="";
		this.searchedProds=[];
		this.origProds=[];
	}		

	// componentWillMount() {
	// 	getProducts().then((products) => {
	// 	  this.setState({ products });
		  
	//     });
	// }
	showSearchedProducts=(event)=>{
		console.log('event',event.target.value);
		this.origProds=this.state.products;
//		console.log('original products are',this.origProds);
		this.origProds.forEach(singleProduct=>{
			console.log('single products are', singleProduct.name);
			if(singleProduct.name.startsWith(event.target.value)){
				this.searchedProds.push(singleProduct);
			}
		}
			)
		console.log("searched prods are",this.searchedProds);
		this.setState({ products:this.searchedProds });
	}

	render() {
		getProducts().then((products) => {
			this.setState({ products });
			
		  });
		const { products } =  this.state;
		return (
			<div className="container">
				<h3 className="card-title">List of Available Products</h3>
				{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>>
  <div class="input-group-append">
    <button onClick={this.showSearchedProducts} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
</div> */}
				
  {/* <input onChange={this.showSearchedProducts} type="text" class="form-control" placeholder="Search The Medical Equipments" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}


				<hr/>
				<div className="box">
				{
					// products.map((product, index) => 
					// <div class="col">
					// <ProductItem product={product} key={index}/>
					// </div>)
					products.map((product, index) => <ProductItem product={product} key={index}/>) 
					
				}
				</div>
				<hr/>
				<Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Cart</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
} 
