/*
 * @Author: Qiling
 * @Date: 2022-07-09 20:59:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 21:25:35
 * @FilePath: \react-advanced-2020\src\tutorial\1-useState\setup\1-error-example.js
 * @Description:
 *
 */
import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const handClick = () => {
    title = "Hello People!";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
