/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const copyToCB = () => {
  //     setAlert(true)
  // }
  return (
    <>
      <article
        style={{ backgroundColor: `rgb(${bcg})` }}
        className={`color ${index > 10 && `color-light`}`}
      >
        <p className="percent-value">{weight}%</p>
      </article>
    </>
  );
};

export default SingleColor;
