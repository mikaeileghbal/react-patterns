import React from "react";
import TweetSearchResult from "./components/TweetSearchResult";

const tweets = [
  {
    category: "Entertainment",
    retweets: "450",
    isLocal: false,
    text: "Omg. A Tweet.",
  },
  {
    category: "Entertainment",
    retweets: "100",
    isLocal: false,
    text: "Omg. Another.",
  },
  {
    category: "Technology",
    retweets: "32",
    isLocal: false,
    text: "New Feature.",
  },
  {
    category: "Technology",
    retweets: "88",
    isLocal: true,
    text: "Laerning React",
  },
];
export default function App() {
  return (
    <div>
      <TweetSearchResult tweets={tweets} />
    </div>
  );
}
