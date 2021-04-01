import React from "react";
import classes from "./NumGrids.module.css";

export const NumGrids = props => {
  return (
    <div className={classes.NumGrids} onClick={event => props.clicked(event)}>
      <h3>{props.children}</h3>
    </div>
  );
};
