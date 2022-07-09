/*
 * @Author: Qiling
 * @Date: 2022-07-09 20:59:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 21:59:47
 * @FilePath: \react-advanced-2020\src\tutorial\1-useState\setup\4-useState-object.js
 * @Description:
 *
 */
import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "rand message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World!" });
    //DOING:传入person整个值，保证原来的值不变，再改变信息
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
