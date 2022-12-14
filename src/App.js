import React from "react";
import Pager from "./components/Pager/Pager";
import Scroll from "./components/Scroll/Scroll";
import TweetSearchResult from "./components/TweetSearchResult";
import FlyoutMenu from "./patterns/Compound/FlyoutMenu";
import DogImages from "./patterns/ContainerPresentational/DogImages";

import DogImagesContainer from "./patterns/ContainerPresentational/DogImagesContainer";
import HOC from "./patterns/HOC/witStyle";
import Hook from "./patterns/Hook/Hook";
import Hover from "./patterns/Hook/useHover";
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
        <Scroll />
      </div>
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
      <div>
        <HOC />
      </div>
      <div>
        <Hover />
      </div>
      <div>
        <FlyoutMenu />
      </div>
      <Pager pageCount={10} />
    </>
  );
}
