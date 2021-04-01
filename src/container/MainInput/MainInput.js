import React, { useState, useCallback, useEffect } from "react";
import { NumGrids } from "../../components/NumGrids/NumGrids";
import uuid from "react-uuid";
import classes from "./MainInput.module.css";

export const MainInput = props => {
  const [inputData, setInputData] = useState([]);
  const inputDataCreator = useCallback(() => {
    for (var i = 1; i <= 9; i++) {
      inputData.push(i);
    }
    inputData.push("#");
    inputData.push(0);
    inputData.push("<-");
    setInputData([...inputData]);
  });
  useEffect(() => {
    if (inputData < 12) {
      inputDataCreator();
    }
  }, []);
  let inputDataJsx;
  if (inputData.length) {
    inputDataJsx = inputData.map(inputItem => {
      return (
        <div key={uuid()}>
          <NumGrids clicked={props.inputClicked}>{inputItem}</NumGrids>
        </div>
      );
    });
  }
  return (
    <div>
      <div className={classes.InputItems}>{inputDataJsx}</div>
    </div>
  );
};
