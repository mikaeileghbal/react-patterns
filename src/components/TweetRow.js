import React from "react";

const TweetRow = ({ tweet }) => {
  return (
    <tr>
      <td>
        <span>{tweet.text}</span>
      </td>
      <td>{tweet.retweets}</td>
    </tr>
  );
};

export default TweetRow;
