import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Modal></Modal>
        <ProductList></ProductList>
      </div>
    );
  }
}
