import React, { Component } from "react";
import Detail from "./Detail";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Giỏ Hàng</h3>
        <p data-toggle="modal" data-target="#modalID">
          Gio
        </p>
        <ProductList selected={this.selected}></ProductList>
        <Detail></Detail>
        <Cart></Cart>
      </div>
    );
  }
}
