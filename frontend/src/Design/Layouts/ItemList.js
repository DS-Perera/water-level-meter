import React from "react";

export default function ItemList() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div>
      <h3>Component List</h3>
      <button
        type="button"
        className="btn btn-primary m-2 px-2 py-2 equal-width-btn"
        onClick={() => {
          setSelected(1);
        }}
      >
        Component 01
      </button>
      <button
        type="button"
        className="btn btn-primary m-2 px-2 py-2 equal-width-btn"
        onClick={() => {
          setSelected(2);
        }}
      >
        Component 02
      </button>
      <button
        type="button"
        className="btn btn-secondary m-2 px-2 py-2 equal-width-btn"
        onClick={() => {
          setSelected(2);
        }}
      >
        Add Another
      </button>
    </div>
  );
}
