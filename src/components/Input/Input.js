import React, { useEffect, useRef, useState } from "react";
import classes from "./Input.module.css";
import uuid from "react-uuid";
export const Input = props => {
  const reference = useRef(null);
  let [inputState, newInputState] = useState(null);
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
    if (props.data && props.data.length) {
      if (props.data.slice(-1) === "#") {
        let newData = props.data.split("#");
        inputState = newData.map((data, index) => {
          if (index === newData.length - 1) {
            return (
              <span key={uuid()}>
                <span onClick={event => props.consoleOutput(event, reference)}>
                  {data}
                </span>
              </span>
            );
          } else {
            return (
              <span key={uuid()}>
                <span onClick={event => props.consoleOutput(event, reference)}>
                  {data}
                </span>
                #
              </span>
            );
          }
        });
        newInputState([...inputState]);
      } else {
        let newData = props.data.split("#");
        inputState = newData.map((data, index) => {
          if (index === newData.length - 1) {
            return (
              <span key={uuid()}>
                <span onClick={event => props.consoleOutput(event, reference)}>
                  {data}
                </span>
              </span>
            );
          } else {
            return (
              <span key={uuid()}>
                <span onClick={event => props.consoleOutput(event, reference)}>
                  {data}
                </span>
                #
              </span>
            );
          }
        });
        newInputState([...inputState]);
      }
    } else {
      newInputState("");
    }
  }, [props.data]);
  return (
    <div
      className={classes.Input}
      style={{
        overflowX: overFlow.scroll,
        overflowY: "hidden",
        height: overFlow.height,
      }}
    >
      <h3 ref={reference} className={classes.InputChild}>
        {inputState}
      </h3>
    </div>
  );
};
