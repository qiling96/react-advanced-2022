/*
 * @Author: Qiling
 * @Date: 2022-07-09 20:59:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 21:39:21
 * @FilePath: \react-advanced-2020\src\tutorial\1-useState\setup\2-useState-basics.js
 * @Description:
 *
 */
import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Random Title");
  const handler = () => {
    if (text === "Random Title") {
      setText("Hello People");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
