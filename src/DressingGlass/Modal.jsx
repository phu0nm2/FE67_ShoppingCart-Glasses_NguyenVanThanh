import React, { Component } from "react";

import { connect } from "react-redux";

class Modal extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundImage: "url('./assets/glassesImage/background.jpg')",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              width: "100%",
              height: "100%",
            }}
          >
            <div style={{ position: "relative" }}>
              <h3 className="pt-3 text-light">TRY GLASSER APP ONLINE</h3>
              <img
                style={{ height: 250, width: 200 }}
                className=""
                src="./assets/glassesImage/model.jpg"
                alt=""
              />
            </div>
            {/*  */}
            <div
              style={{
                position: "absolute",
                backgroundImage: `url(${this.props.selectedProducts.glasses})`,
                backgroundSize: "cover",
                height: 45,
                width: 120,
                top: "16%",
                left: "45%",
                transform: "translate(3.6%, 10%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    glasser: state.glass.glassList,
    selectedProducts: state.glass.selectedProducts,
  };
};
export default connect(mapStateToProps)(Modal);
