import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

class FoodMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			one: {
				name: "Margherita",
				cart: {
					size: null,
					quantity: 0
				},
				price: {
					small: 100,
					medium: 200,
					large:300
				},
				image: "margherita.png",
				disc:"A hugely popular margherita, with a deliciously tangy single cheese topping"
		

			},
			two: {
				name: "Farm House",

				cart: {
					size: null,
					quantity: 0
				},
				price: {
					small: 150,
					medium: 250,
					large: 350
				},
				image: "farmhouse.png",
				disc: "A pizza that goes ballistic on veggies! Check out this mouth watering"+
				"overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes"


			},
			three: {
				name: "Mexican Green Wave",

				cart: {
					size: null,
					quantity: 0
				},
				price: {
					small: 250,
					medium: 350,
					large: 500
				},
				image: "greenwave.jpg",
				disc: "A pizza loaded with crunchy onions, crisp capsicum,"+
				"juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."


			},
			four: {
				name: "Indi Tandoori Paneer",

				cart: {
					size: null,
					quantity: 0
				},
				price: {
					small: 250,
					medium: 350,
					large: 500
				},
				image: "tandori.jpg",
				disc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo"


			},

			total: 0
		};
	}
	render() {
		return (<div className="ui container">
			<h1>Menu</h1><br />
			{this.rendermenu()}<br/><br/>
		

			<Link  to={`/ordersummary/${this.state.one.cart.size}/${this.state.one.cart.quantity}/${this.state.two.cart.size}/${this.state.two.cart.quantity}/${this.state.three.cart.size}/${this.state.three.cart.quantity}/${this.state.four.cart.size}/${this.state.four.cart.quantity}/${this.state.total}`}
				className="right floated massive ui green button">Go To Cart</Link>

			
		
		</div>);
	}
	//next() {
		//if (!this.state.one.cart.size) {
			//return <div className="ui error">Please Select size(small,medium.large)<hr/></div>
		//}
		//else {
			//return <Link to={`/ordersummary/${this.state.one.cart.size}/${this.state.one.cart.quantity}`}
				//className="right floated ui green button">Go To Cart</Link>
		//}
	//}
	
	rendermenu() {
		return (<div>
			<MenuList
				name={this.state.one.name}
				image={this.state.one.image}
				price={this.state.one.price}
				disc={this.state.one.disc}
				onDone={this.setsizeone}
			/>
			
			<h1>{this.state.one.cart.quantity}</h1>
			<button className="ui blue button" onClick={this.addone}>+</button>
			<button className="ui blue button" onClick={this.subone}>-</button>
			<button className="right floated ui blue button" onClick={this.getTotalone}>Add To Cart</button><hr />

			<MenuList
				name={this.state.two.name}
				image={this.state.two.image}
				price={this.state.two.price}
				disc={this.state.two.disc}
				onDone={this.setsizetwo}
			/>
			<h1>{this.state.two.cart.quantity}</h1>
			<button className="ui blue button" onClick={this.addtwo}>+</button>
			<button className="ui blue button" onClick={this.subtwo}>-</button>
			<button className="right floated ui blue button" onClick={this.getTotaltwo}>Add To Cart</button><hr/>

			<MenuList
				name={this.state.three.name}
				image={this.state.three.image}
				price={this.state.three.price}
				disc={this.state.three.disc}
				onDone={this.setsizethree}
			/>
			<h1>{this.state.three.cart.quantity}</h1>
			<button className="ui blue button" onClick={this.addthree}>+</button>
			<button className="ui blue button" onClick={this.subthree}>-</button>
			<button className="right floated ui blue button" onClick={this.getTotalthree}>Add To Cart</button><hr />

			<MenuList
				name={this.state.four.name}
				image={this.state.four.image}
				price={this.state.four.price}
				disc={this.state.four.disc}
				onDone={this.setsizefour}
			/>
			<h1>{this.state.four.cart.quantity}</h1>
			<button className="ui blue button" onClick={this.addfour}>+</button>
			<button className="ui blue button" onClick={this.subfour}>-</button>
			<button className="right floated ui blue button" onClick={this.getTotalfour}>Add To Cart</button><hr />
		
		</div>
		);
	}
	getTotalone = (event) => {
		event.preventDefault();
		if (this.state.one.cart.size === "small") {
			const tot = Number(this.state.one.cart.quantity) * Number(this.state.one.price.small);
			this.setState({ total: Number(this.state.total) +tot });
		}
		if (this.state.one.cart.size === "medium") {
			const tot = Number(this.state.one.cart.quantity) * Number(this.state.one.price.medium);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.one.cart.size === "large") {
			const tot = Number(this.state.one.cart.quantity) * Number(this.state.one.price.large);
			this.setState({ total: Number(this.state.total) + tot });
		}
		
	}
	getTotaltwo = (event) => {
		event.preventDefault();
		if (this.state.two.cart.size === "small") {
			const tot = Number(this.state.two.cart.quantity) * Number(this.state.two.price.small);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.two.cart.size === "medium") {
			const tot = Number(this.state.two.cart.quantity) * Number(this.state.two.price.medium);
			this.setState({ total: Number(this.state.total)+tot });
		}
		if (this.state.two.cart.size === "large") {
			const tot = Number(this.state.two.cart.quantity) * Number(this.state.two.price.large);
			this.setState({ total: Number(this.state.total)+ tot });
		}

	}
	getTotalthree= (event) => {
		event.preventDefault();
		if (this.state.three.cart.size === "small") {
			const tot = Number(this.state.three.cart.quantity) * Number(this.state.three.price.small);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.three.cart.size === "medium") {
			const tot = Number(this.state.three.cart.quantity) * Number(this.state.three.price.medium);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.three.cart.size === "large") {
			const tot = Number(this.state.three.cart.quantity) * Number(this.state.three.price.large);
			this.setState({ total: Number(this.state.total) + tot });
		}
	

	}
	getTotalfour = (event) => {
		event.preventDefault();
		if (this.state.four.cart.size === "small") {
			const tot = Number(this.state.four.cart.quantity) * Number(this.state.four.price.small);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.four.cart.size === "medium") {
			const tot = Number(this.state.four.cart.quantity) * Number(this.state.four.price.medium);
			this.setState({ total: Number(this.state.total) + tot });
		}
		if (this.state.four.cart.size === "large") {
			const tot = Number(this.state.four.cart.quantity) * Number(this.state.four.price.large);
			this.setState({ total: Number(this.state.total) + tot });
		}


	}
	
	setsizeone=(a)=> {
		console.log(a);
		var one = { ...this.state.one };
		one.cart.size = a;
		this.setState({ one });
	}
	setsizetwo = (a) => {
		console.log(a);
		var two = { ...this.state.two };
		two.cart.size = a;
		this.setState({ two });
	}
	setsizethree = (a) => {
		console.log(a);
		var three = { ...this.state.three };
		three.cart.size = a;
		this.setState({ three });
	}
	setsizefour = (a) => {
		console.log(a);
		var four = { ...this.state.four };
		four.cart.size = a;
		this.setState({ four });
	}
	addone = (event) => {
		event.preventDefault();
		var one = { ...this.state.one };
		one.cart.quantity = Number(this.state.one.cart.quantity) + 1;

		this.setState({ one });
	    
	}
	addtwo = (event) => {
		event.preventDefault();
		var two = { ...this.state.two };
		two.cart.quantity = Number(this.state.two.cart.quantity) + 1;

		this.setState({ two });

	}
	addthree = (event) => {
		event.preventDefault();
		var three = { ...this.state.three };
		three.cart.quantity = Number(this.state.three.cart.quantity) + 1;

		this.setState({ three });

	}
	addfour = (event) => {
		event.preventDefault();
		var four = { ...this.state.four };
		four.cart.quantity = Number(this.state.four.cart.quantity) + 1;

		this.setState({ four });

	}
	subone = (event) => {
		event.preventDefault();
		var one = { ...this.state.one };
		one.cart.quantity = Number(this.state.one.cart.quantity) - 1;
		this.setState({ one });
	}
	subtwo = (event) => {
		event.preventDefault();
		var two = { ...this.state.two };
		two.cart.quantity = Number(this.state.two.cart.quantity) - 1;
		this.setState({ two });
	}
	subthree = (event) => {
		event.preventDefault();
		var three = { ...this.state.three };
		three.cart.quantity = Number(this.state.three.cart.quantity) - 1;
		this.setState({ three });
	}
	subfour = (event) => {
		event.preventDefault();
		var four = { ...this.state.four };
		four.cart.quantity = Number(this.state.four.cart.quantity) - 1;
		this.setState({ four });
	}
	
}

export default FoodMenu;