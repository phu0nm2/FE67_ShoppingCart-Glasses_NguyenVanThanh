const initialState = {
  glassList: [
    {
      type: "glasses",
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./assets/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./assets/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./assets/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./assets/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./assets/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./assets/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./assets/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./assets/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      type: "glasses",
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./assets/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ],
  selectedProducts: {
    // type: img,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECT_PRODUCT":
      state.selectedProducts = {
        ...state.selectedProducts,
        [action.payload.type]: action.payload.img,
      };
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
