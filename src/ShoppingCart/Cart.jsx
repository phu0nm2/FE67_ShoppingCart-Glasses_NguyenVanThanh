import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  //tang giam so luong
  increaseQuantity = (id) => {
    this.props.dispatch({
      type: "INCREASE",
      payload: {
        id,
      },
    });
  };
  decreaseQuantity = (id) => {
    this.props.dispatch({
      type: "DECREASE",
      payload: {
        id,
      },
    });
  };

  deleteItem = (id) => {
    this.props.dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };
  renderCart = () => {
    const renderHTML = this.props.cart.cart.map((item) => {
      const { name, id, img, price } = item.prod;

      return (
        <tr key={item.prod.id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            <img style={{ width: 100 }} src={img} alt="" />
          </td>
          <td>
            <button
              onClick={() => this.decreaseQuantity(id)}
              className="btn btn-info"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => this.increaseQuantity(id)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{price}</td>
          <button
            onClick={() => this.deleteItem(id)}
            className="btn btn-success"
          >
            Xóa
          </button>
        </tr>
      );
    });
    return renderHTML;
  };

  render() {
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modalID"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ Hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình Ảnh</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành Tiền</th>
                        <th>Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderCart()}</tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
  };
};
export default connect(mapStateToProps)(Cart);
