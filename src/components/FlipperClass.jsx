import React from "react";

export default class FlipperClass extends React.Component {
  childRefs = {};
  childrenPositions = {};

  childrenWithRefs = () => {
    return this.props.children.map((child) => {
      const ref = this.childRefs[child.key] || React.createRef();
      this.childRefs[child.key] = ref;
      return React.cloneElement(child, { ref });
    });
  };

  getSnapshotBeforeUpdate(prevProps) {
    prevProps.children.forEach((child) => {
      const ref = this.childRefs[child.key];
      if (ref && ref.current) {
        this.childrenPositions[child.key] = ref.current.getBoundingClientRect();
      }
    });
    return null;
  }

  componentDidUpdate() {
    this.props.children.forEach((child) => {
      const ref = this.childRefs[child.key];
      if (ref && ref.current) {
        const oldBox = this.childrenPositions[child.key];
        const newBox = ref.current.getBoundingClientRect();
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
    });
  }

  render() {
    return this.childrenWithRefs();
  }
}
