import Item1 from "../images/one.jpg";
import Item2 from "../images/laptop.jpg";
import Item3 from "../images/watch.jpg";
import { ADD_TO_CART } from "./actions";
//Products
var initalstate = {
  items: [
    {
      id: 1,
      name: "Mobile",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      name: "Laptop",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 100,
      img: Item2,
    },
    {
      id:3 ,
      name: "Mobile",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 150,
      img: Item3,
    },
  ],
  addedItems: [],
  total: 0,
};

export const products = (state = initalstate, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
  }
};
