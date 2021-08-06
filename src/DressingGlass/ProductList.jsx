import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderHTML = () => {
    return this.props.productList.map((product) => {
      return (
        <div key={product.id}>
          <ProductItem prod={product}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row" style={{ justifyContent: "center" }}>
        {this.renderHTML()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.glass.glassList,
  };
};
export default connect(mapStateToProps)(ProductList);
