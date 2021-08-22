import React from "react";
import { GiCoffeeCup, GiSushis } from "react-icons/gi";
const Coffee = ({ num }) => {
  const createCoffee = () => {
    let mugs = [];
    if (num <= 30) {
      let newNum = Math.ceil(num / 5);
      for (let i = 0; i < newNum; i++) {
        mugs.push(<GiCoffeeCup />);
      }
    } else {
      let newNum = Math.ceil(num / 10);
      for (let i = 0; i < newNum; i++) {
        mugs.push(<GiSushis />);
      }
    }
    return mugs;
  };
  return <span>{createCoffee()}</span>;
};

export default Coffee;
