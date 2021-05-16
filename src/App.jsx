/* eslint-disable no-unused-vars */
import { useState } from "react";
import Values from "values.js";

import SingleColor from "./components/SingleColor.jsx";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
