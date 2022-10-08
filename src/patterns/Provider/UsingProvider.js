import React, { createContext, useContext } from "react";

const data = { id: 1, name: "John" };
const DataContext = createContext({});

export default function UsingProvider() {
  return (
    <div>
      <DataContext.Provider value={{ data }}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}

function SideBar() {
  const { data } = useContext(DataContext);
  console.log(data.name);
  return <div>id:{data.id}</div>;
}

function Content() {
  const { data } = useContext(DataContext);
  return <div>name: {data.name}</div>;
}
