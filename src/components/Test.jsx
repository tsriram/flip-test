import React from "react";

function useClientRect() {
  const [rect, setRect] = React.useState(null);
  const ref = React.useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  // console.log("rect: ", rect);
  return [rect, ref];
}

const Item = (props) => {
  const [rect, ref] = useClientRect({});

  // console.log("Position changed: ", props.children, rect);

  return (
    <div className="list-item" ref={ref}>
      {props.children}
    </div>
  );
};

const Flipper = (props) => {
  React.useEffect(() => {
    console.log("Items: ", props.children.map((child) => child.key).join(","));
    React.Children.forEach(props.children, (child) => {
      console.log("ref: ", child.ref);
    });
  });

  return <div>{props.children}</div>;
};

const Test = () => {
  const [items, setItems] = React.useState([1, 2]);

  return (
    <>
      <Flipper>
        {items.map((item) => {
          return <Item key={item}>{item}</Item>;
        })}
      </Flipper>
      <button onClick={() => setItems([...items.reverse()])}>Reverse</button>
    </>
  );
};

export default Test;
