import React from "react";

const refs = {};
const childrenPositions = {};
const Flipper = (props) => {
  React.useEffect(() => {
    props.children.forEach((child) => {
      const ref = refs[child.key];
      if (ref && ref.current) {
        childrenPositions[child.key] = ref.current.getBoundingClientRect();
      }
    });
  }, [props.children]);

  React.useLayoutEffect(() => {
    props.children.forEach((child) => {
      const ref = refs[child.key];
      if (ref && ref.current) {
        const oldBox = childrenPositions[child.key];
        const newBox = ref.current.getBoundingClientRect();
        if (oldBox && newBox) {
          const deltaX = oldBox.left - newBox.left;
          const deltaY = oldBox.top - newBox.top;
          const domNode = ref.current;
          requestAnimationFrame(() => {
            domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              domNode.style.transform = "";
              domNode.style.transition = "transform 500ms";
            });
          });
        }
      }
    });
  }, [props.children]);

  return React.Children.map(props.children, (child) => {
    const ref = React.useRef();
    refs[child.key] = ref;
    return React.cloneElement(child, {
      ref
    });
  });
};

export default Flipper;
