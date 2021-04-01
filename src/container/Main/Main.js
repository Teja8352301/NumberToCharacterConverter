import React, { useState, useCallback, useEffect } from "react";
import { MainInput } from "../MainInput/MainInput";
import { Input } from "../../components/Input/Input";
import { Output } from "../../components/Output/Output";
export const Main = () => {
  const [alphabets, setAlphabets] = useState([]);
  const [inputData, setInputData] = useState();
  const [outputData, setOutputData] = useState();
  const alphabetsCreator = useCallback(() => {
    for (var i = 65; i <= 90; i++) {
      alphabets.push(String.fromCharCode(i));
    }
    setAlphabets([...alphabets]);
  });
  useEffect(() => {
    if (alphabets.length < 26) {
      alphabetsCreator();
    }
  }, []);
  useEffect(() => {
    if (inputData != undefined) {
      changingOutput();
    }
  }, [inputData]);

  const changingOutput = () => {
    if (inputData.length) {
      let inputArray = inputData.split("#");
      for (var i = 0; i < inputArray.length; i++) {
        while (inputArray[i] >= 26) {
          inputArray[i] = inputArray[i] - 26;
        }
        inputArray[i] = parseInt(inputArray[i]);
      }
      let outputArray = inputArray.map(val => {
        return alphabets[val];
      });
      setOutputData(outputArray);
    } else {
      setOutputData("");
    }
  };

  const inputClicked = event => {
    if (event.target.textContent != "<-") {
      if (!inputData) {
        setInputData(event.target.textContent);
      } else {
        let getData = inputData;
        getData = getData + event.target.textContent;
        setInputData(getData);
      }
    } else {
      let getData = inputData;
      getData = getData.slice(0, -1);
      setInputData(getData);
    }
  };
  const valueConsole = (event, ref) => {
    alert(`You Typed ${event.target.textContent}`);
  };

  return (
    <div>
      <Input consoleOutput={valueConsole} data={inputData} />

      <Output data={inputData}>{outputData}</Output>
      <MainInput inputClicked={inputClicked} />
    </div>
  );
};
