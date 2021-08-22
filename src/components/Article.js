import React from "react";
// import ReactEmoji, { Emoji } from "react-emoj";
import Coffee from "./Coffe";

const checkCoffe = (num) => {
  if (num > 30) {
    return Math.ceil(num / 10);
  } else if (num <= 30) {
    return Math.ceil(num / 5);
  } else if (num <= 5) {
    return 1;
  }
};

const Article = ({ ...item }) => {
  const { id, title, date = "January 1, 1970", preview, minutes } = item;
  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date}.`}</small>
      <Coffee num={minutes} />
      <small>{`${minutes} min read`}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
