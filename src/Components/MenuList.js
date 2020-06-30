import React from 'react';

class MenuList extends React.Component {
	render() {
		return (
			<div className="ui items">
				<div className="item">
					<div className="image">
						<img src={this.props.image} />
					</div>
					<div className="content">
						<a className="header">{this.props.name}</a>
						<div className="meta">
							<span>{this.props.disc}</span>
						</div>

						<div className="extra" onChange={this.getSize} >
							<h4>Price:</h4>
							
							<input type="radio" id="small" name={this.props.name} value="small"/>
							<label>Small:&nbsp;&nbsp;Rs{this.props.price.small}</label>
							<input type="radio" id="medium" name={this.props.name} value="medium" />
							<label>Medium:&nbsp;&nbsp;Rs{this.props.price.medium}</label>
							<input type="radio" id="large" name={this.props.name}  value="large"/>
							<label>Large:&nbsp;&nbsp;Rs{this.props.price.large}</label>
							
							
						</div><br/><br/>
						<p><b>(Selct Size and Quantity and then Click on Add To cart)</b></p>
					</div></div></div>

		);
	}
	getSize = (event) => {
		
		console.log(event.target.value);
		console.log(this.props);
		this.props.onDone(event.target.value);
		

		
    }
}

export default MenuList;