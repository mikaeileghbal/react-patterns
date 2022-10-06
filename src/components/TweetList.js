import React from "react";
import TweetCategory from "./TweetCategory";
import TweetRow from "./TweetRow";

const TweetList = ({ tweets, filterText, inThisLocation }) => {
  const rows = [];
  let lastCategory = null;

  tweets.map((tweet) => {
    if (tweet.text.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inThisLocation && !tweet.isLocal) {
      return;
    }
    if (tweet.category !== lastCategory) {
      rows.push(
        <TweetCategory category={tweet.category} key={tweet.category} />
      );
    }
    rows.push(<TweetRow tweet={tweet} key={tweet.text} />);
    lastCategory = tweet.category;
    return;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Tweet Text</th>
          <th>Retweets</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TweetList;
