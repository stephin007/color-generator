/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;
  const bcg = rgb.join(",");
  const copyToCB = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <>
      <article
        className={`color ${index > 10 && `color-light`}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={copyToCB}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </article>
    </>
  );
};

export default SingleColor;
