import React, { createContext, useContext, useEffect, useState } from "react";

const GroupSelectionContext = createContext();

export default function FlyoutMenu() {
  const [groupSelection, setGroupSelection] = useState({});

  useEffect(() => {
    console.log(groupSelection);
  }, [groupSelection]);

  return (
    <div>
      <GroupSelectionContext.Provider
        value={{ groupSelection, setGroupSelection }}
      >
        <FlyOut name="genre">
          <FlyOut.Toggle />
          <FlyOut.List>
            <FlyOut.Item name="pop">Pop</FlyOut.Item>
            <FlyOut.Item name="rock">Rock</FlyOut.Item>
          </FlyOut.List>
        </FlyOut>
        <FlyOut name="format">
          <FlyOut.Toggle />
          <FlyOut.List>
            <FlyOut.Item name="vinyl">Vinyl</FlyOut.Item>
            <FlyOut.Item name="cd">CD</FlyOut.Item>
          </FlyOut.List>
        </FlyOut>
        <div>
          <button>Apply all</button>
        </div>
      </GroupSelectionContext.Provider>
    </div>
  );
}

const FlyOutContext = createContext();

function FlyOut({ children, name }) {
  const [open, toggle] = useState(false);
  const [selection, setSelection] = useState({});

  const { groupSelection, setGroupSelection } = useContext(
    GroupSelectionContext
  );

  useEffect(() => {
    console.log(selection);
    setGroupSelection({ ...groupSelection, [name]: { ...selection } });
  }, [selection]);

  return (
    <FlyOutContext.Provider value={{ open, toggle, selection, setSelection }}>
      {children}
    </FlyOutContext.Provider>
  );
}

function Toggle() {
  const { open, toggle } = useContext(FlyOutContext);
  return <div onClick={() => toggle(!open)}>Toggle (Icon)</div>;
}

function List({ children }) {
  const { open } = useContext(FlyOutContext);
  return open && <ul>{children}</ul>;
}

function Item({ children, name }) {
  const { selection, setSelection } = useContext(FlyOutContext);

  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          value={selection[name]}
          onChange={(e) =>
            setSelection({ ...selection, [e.target.name]: e.target.checked })
          }
        />
        {children}
      </label>
    </div>
  );
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
