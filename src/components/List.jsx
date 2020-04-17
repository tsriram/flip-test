import FlipperClass from "./FlipperClass";
import shuffle from "lodash.shuffle";
import ListItem from "./ListItem";
import React from "react";
import Flipper from "./Flipper";

const initialList = ["One", "Two", "Three", "Four"];

const List = () => {
  const [list, setList] = React.useState(initialList);

  return (
    <React.Fragment>
      <Flipper>
        {list.map((listItem) => {
          return <ListItem key={listItem}>{listItem}</ListItem>;
        })}
      </Flipper>
      <div className="button-container">
        <button
          className="btn-shuffle"
          onClick={() => {
            setList(shuffle(list));
          }}
        >
          Shuffle
        </button>
      </div>
    </React.Fragment>
  );
};

export default List;
