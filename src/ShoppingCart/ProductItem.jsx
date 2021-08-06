import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleAddToCart = () => {
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: {
          id: this.props.prod.id,
          name: this.props.prod.name,
          img: this.props.prod.img,
          price: this.props.prod.price,
        },
      },
    });
  };

  handleViewDetail = () => {
    // this.props.selected(this.props.prod);
    this.props.dispatch({
      type: "VIEW_DETAIL",
      payload: {
        product: {
          id: this.props.prod.id,
          name: this.props.prod.name,
          img: this.props.prod.img,
          screen: this.props.prod.screen,
          frontCamera: this.props.prod.frontCamera,
          backCamera: this.props.prod.backCamera,
          desc: this.props.prod.desc,
        },
      },
    });
  };
  // ------------------------------------------------------

  render() {
    const { img, name } = this.props.prod;

    return (
      <div>
        <div className="">
          <img src={img} alt="" style={{ width: "100%", height: "300px" }} />
          <h4>{name}</h4>
        </div>
        <button onClick={this.handleViewDetail} className="btn btn-info">
          Xem Chi Tiết
        </button>
        <button onClick={this.handleAddToCart} className="btn btn-danger">
          Thêm Giỏ Hàng
        </button>
      </div>
    );
  }
}

export default connect()(ProductItem);
