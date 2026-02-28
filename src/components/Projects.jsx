import React from "react";
import style from "./style.module.scss";
export default function Projects({ index, title, setModel, stack }) {
  return (
    <div
      key={index}
      className={style.projects}
      onMouseEnter={() => {
        setModel({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModel({ active: false, index: index });
      }}
    >
      <h1>{title}</h1>
      <span>{stack}</span>
    </div>
  );
}
