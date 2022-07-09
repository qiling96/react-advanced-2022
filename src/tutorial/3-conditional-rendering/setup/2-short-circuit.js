/*
 * @Author: Qiling
 * @Date: 2022-07-09 20:59:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 23:33:54
 * @FilePath: \react-advanced-2020\src\tutorial\3-conditional-rendering\setup\2-short-circuit.js
 * @Description:
 *
 */
import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("");
  //DOING:或运算，如果第一个为真，则返回第一个；
  //DOING：与运算，两个为真，返回第2个；
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>Error.....</h1>}
      {isError ? (
        <p>there is an error!</p>
      ) : (
        <div>
          <h2>there is no error!</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
