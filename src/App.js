import React from "react";
import TweetSearchResult from "./components/TweetSearchResult";
import DogImages from "./patterns/ContainerPresentational/DogImages";

import DogImagesContainer from "./patterns/ContainerPresentational/DogImagesContainer";
import Hook from "./patterns/Hook/Hook";
import ObserverApp from "./patterns/Observer/ObserverApp";
import ThemedApp from "./patterns/Provider/ThemedApp";
import UsingProvider from "./patterns/Provider/UsingProvider";
import ProxyTest from "./patterns/Proxy/ProxyTest";
import InputWithRender from "./patterns/RenderProp/InputWithRender";
import singletonCounter from "./patterns/Singleton/Counter";
import SingletonTest from "./patterns/Singleton/TestApp";

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
    <>
      <div>
        <TweetSearchResult tweets={tweets} />
      </div>
      <div>
        <SingletonTest />
      </div>
      <div>{/* <ProxyTest /> */}</div>
      <div>
        <UsingProvider />
      </div>
      <div>
        <ThemedApp />
      </div>
      <div>
        {/* <DogImagesContainer /> */}
        <DogImages />
      </div>
      <div>
        <ObserverApp />
      </div>
      <div>
        <InputWithRender />
      </div>
      <div>
        <Hook />
      </div>
    </>
  );
}
