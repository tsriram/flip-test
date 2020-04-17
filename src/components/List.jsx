import FlipperClass from "./FlipperClass";
import shuffle from "lodash.shuffle";
import ListItem from "./ListItem";
import React from "react";
import Flipper from "./Flipper";

const size = 16;
const initialList = Array(size)
  .fill()
  .map((item, index) => index + 1);

const List = () => {
  const [list, setList] = React.useState(initialList);

  return (
    <React.Fragment>
      <div className="list">
        <Flipper>
          {list.map((item) => {
            return <ListItem key={item} />;
          })}
        </Flipper>
      </div>
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
