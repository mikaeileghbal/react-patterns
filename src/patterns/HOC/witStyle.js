import { useEffect, useState } from "react";

function withStyle(Component) {
  return (props) => {
    // Add any logig to the Componetn
    const style = { padding: "0.5em", margin: "1em" };

    return <Component style={style} {...props} />;
  };
}

function Button() {
  return <button>Button with style</button>;
}

function Text() {
  return <p>Hello World!</p>;
}

const StyledButton = withStyle(Button);
const StyledText = withStyle(Text);

const LoadedDogList = withLoader(
  DogList,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

function HOC() {
  return (
    <div>
      <StyledButton />
      <StyledText />
      <Button style={{ padding: "1em" }} />
      <LoadedDogList />
    </div>
  );
}

export default HOC;

// Loader

function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}

function DogList({ data }) {
  return data.message.map((img) => <img src={img} alt={img} />);
}
