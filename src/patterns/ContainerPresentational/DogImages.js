import React from "react";
import useDogImages from "./useDogImages";

// Presentational component
export default function DogImages({ dogs }) {
  const dogsList = useDogImages();

  //return dogs.map((dog) => <img src={dog} alt="Dog" />);
  return dogsList.map((dog) => <img src={dog} alt="Dog" />);
}
