import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { name, screen, backCamera, frontCamera, img, desc } =
      this.props.selectedProduct.product || {};
    // console.log(this.props);
    return (
      <div>
        {this.props.selectedProduct.product ? (
          <div className="container mt-5">
            <div className="row">
              <div className="col-4">
                <h4>{name}</h4>
                <img src={img} alt="hinh anh" className="w-100" />
              </div>
              <div className="col-8">
                <h4>Thông số kĩ thuật</h4>
                <table className="table">
                  <tr>
                    <td>Màn hình</td>
                    <td>{screen}</td>
                  </tr>
                  <tr>
                    <td>Camera Trước</td>
                    <td>{frontCamera}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{backCamera}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{desc}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.shoppingCart.selectedProduct,
  };
};

export default connect(mapStateToProps)(Detail);
