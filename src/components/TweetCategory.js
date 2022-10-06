import React from "react";

const TweetCategory = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default TweetCategory;
