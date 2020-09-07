import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { addproduct } from "../../redux/actions";
import { connect } from "react-redux";
import item1 from "../../images/one.jpg";
import item2 from "../../images/laptop.jpg";
import item3 from "../../images/watch.jpg";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // add = () => {
  //   this.props.addproduct({
  //       name:this.state.name,
  //       price:this.state.price
  //   });
  // };

  render() {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-center mb-4">Products</h3>
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item1}
                className="card-img-top"
                alt="one"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Mobile</h5>
                <p className="card-text">Ip phone</p>
                <p>Price:1500</p>
                <Link to="/cart" onClick={this.add} className="btn btn-primary">
                  AddTocart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item2} className="card-img-top" alt="one" />
              <div className="card-body">
                <h5 className="card-title">Laptop</h5>
                <p className="card-text">Apple</p>
                <p>Price:5000</p>
                <Link to="/cart" onClick={this.add} className="btn btn-primary">
                  AddTocart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item3} className="card-img-top" alt="one" />
              <div className="card-body">
                <h5 className="card-title">Watch</h5>
                <p className="card-text">Rolex</p>
                <p>Price:2000</p>
                <Link to="/cart" onClick={this.add} className="btn btn-primary">
                  AddTocart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// var mapDispatchToProps = {
//   addproduct:addproduct,
// };

export default Products;
