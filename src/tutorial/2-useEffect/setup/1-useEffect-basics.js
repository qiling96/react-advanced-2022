/*
 * @Author: Qiling
 * @Date: 2022-07-09 20:59:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 22:34:07
 * @FilePath: \react-advanced-2020\src\tutorial\2-useEffect\setup\1-useEffect-basics.js
 * @Description:
 *
 */
import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 2) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  useEffect(() => {
    console.log("Testing");
  }, []);
  //DOING:第二个参数，只希望用户在初始渲染中进行,写的是依赖，当列表中的依赖发生变化时，才会执行useEffect中的任务，
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
