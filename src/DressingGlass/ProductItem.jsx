import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleTryGlass = () => {
    this.props.dispatch({
      type: "SET_SELECT_PRODUCT",
      payload: {
        type: this.props.prod.type,
        img: this.props.prod.url,
      },
    });
  };

  render() {
    return (
      <div style={{ transform: "translateY(250%)" }}>
        <button
          onClick={this.handleTryGlass}
          style={{
            border: "none",
            height: 100,
          }}
          className="pl-3 mt-5"
        >
          <img
            style={{ height: 50, width: 100 }}
            src={this.props.prod.url}
            alt=""
          />
        </button>
      </div>
    );
  }
}

export default connect()(ProductItem);
