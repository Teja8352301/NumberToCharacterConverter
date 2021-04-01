import React, { useRef, useState, useEffect } from "react";
import classes from "./Output.module.css";

export const Output = props => {
  const reference = useRef(null);
  const [overFlow, setoverFlow] = useState({
    scroll: "hidden",
    height: "20px",
  });
  useEffect(() => {
    if (reference.current.getBoundingClientRect().width > 230) {
      setoverFlow({ scroll: "scroll", height: "40px" });
    } else {
      setoverFlow({ scroll: "hidden", height: "20px" });
    }
  }, [props.data]);
  return (
    <div
      className={classes.Output}
      style={{
        overflowX: overFlow.scroll,
        overflowY: "hidden",
        height: overFlow.height,
      }}
    >
      <h3 ref={reference}>{props.children}</h3>
    </div>
  );
};
