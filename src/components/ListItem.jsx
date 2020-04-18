import React, { forwardRef } from "react";

const ListItem = forwardRef((props, ref) => {
  return (
    <div className="list-item" ref={ref}>
      {props.children}
    </div>
  );
});

export default ListItem;
