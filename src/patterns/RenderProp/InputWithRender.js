import React, { useEffect, useState } from "react";

export default function InputWithRender() {
  return (
    <div>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
      <Fetch displayData={(data) => <DogList images={data} />} />
    </div>
  );
}

// First example

function Input(props) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in C"
      />
      {props.render(value)}
    </>
  );
}

function Kelvin({ value }) {
  return <div>{value + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div>{(value * 9) / 5 + 32}F</div>;
}

// Second example

function Fetch({ displayData }) {
  const [data, setData] = useState([]);

  async function fetchDogs() {
    const res = await fetch(
      "https://dog.ceo/api/breed/labrador/images/random/6"
    );
    const result = await res.json();
    setData(result.message);
  }

  useEffect(() => {
    fetchDogs();
  }, []);

  return <div>{displayData(data)}</div>;
}

function DogList({ images }) {
  return (
    <div>
      {images.map((img) => (
        <img src={img} alt={img} key={img} />
      ))}
    </div>
  );
}
