import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentWillReceiveProps(newProps) {
      console.log(newProps)
    this.setState({
      products: newProps.products,
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <h1>Cart Page</h1>
        <div>
          {this.state.products.map((product, index) => {
            return <div key={index}>{product}</div>;
          })}
        </div>
      </div>
    );
  }
}
var mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, null)(Cart);
