import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderHTML = () => {
    return this.props.products.map((item) => {
      return (
        <div className="col-3" key={item.id}>
          <ProductItem prod={item}></ProductItem>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.shoppingCart.products,
  };
};

export default connect(mapStateToProps)(ProductList);
