import React from 'react';
import { Link } from 'react-router-dom';

class Order extends React.Component {
	
	render() {
		console.log(this.props);
		if (this.props.match.params.total !== "0") {
			return (<div className="ui container"><h1>Order Summary</h1><br /><br />
				{this.margherita()}
				{this.farmhouse()}
				{this.wave()}
				{this.tan()}
				<h1><pre>Total:                                         {this.props.match.params.total}</pre></h1>
				<Link to='/' className="right floated ui green button">Back To Menu</Link>

			</div>)
		}
		else {
			return (<div className="ui container">
				<h1>Please Add Something To The Cart</h1>
				<Link to='/' className="right floated ui green button">Back To Menu</Link>
			</div>);
        }
	}
	margherita() {
		const mquant = this.props.match.params.MargeritaQuantity;
		const msize = this.props.match.params.MargeritaSize;
		if (mquant !== "0") {
			return (
				<div class="ui divided items">
					<div class="item">
						<div class="ui tiny image">
							<img src="/margherita.png"/>
    </div>
						<div class="middle aligned content">
							<h3><pre>Margherita                     Size:{msize}                   Quantity:{mquant}</pre></h3>
							
							
    </div>
						</div><hr/></div>

				);
		}
		else {
			return <div></div>;
        }
	}
	farmhouse() {
		const fquant = this.props.match.params.FarmQuantity;
		const fsize = this.props.match.params.FarmSize;
		if (fquant !== "0") {
			return (
				<div class="ui divided items">
					<div class="item">
						<div class="ui tiny image">
							<img src="/farmhouse.png" />
						</div>
						<div class="middle aligned content">
							<h3><pre>Farm House                     Size:{fsize}                    Quantity:{fquant}</pre></h3>


						</div>
					</div><hr/></div>

			);
		}
		else {
			return <div></div>;
		}

	}
	wave() {
		const wquant = this.props.match.params.WaveQuantity;
		const wsize = this.props.match.params.WaveSize;
		if (wquant !== "0") {
			return (
				<div class="ui divided items">
					<div class="item">
						<div class="ui tiny image">
							<img src="/greenwave.jpg" />
						</div>
						<div class="middle aligned content">
							<h3><pre>Mexicon Green Wave             Size:{wsize}                    Quantity:{wquant}</pre></h3>


						</div>
					</div><hr /></div>

			);
		}
		else {
			return <div></div>;
		}

	}
	tan() {
		const tquant = this.props.match.params.TanQuantity;
		const tsize = this.props.match.params.TanSize;
		if (tquant !== "0") {
			return (
				<div class="ui divided items">
					<div class="item">
						<div class="ui tiny image">
							<img src="/tandori.jpg" />
						</div>
						<div class="middle aligned content">
							<h3><pre>Indi Tandoori Paneer           Size:{tsize}                   Quantity:{tquant}</pre></h3>


						</div>
					</div><hr /></div>

			);
		}
		else {
			return <div></div>;
		}

    }
}
export default Order;