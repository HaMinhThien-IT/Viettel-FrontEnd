import React from "react";
import { brand } from "../../../model/Option";
import "./Brand.css";
type props = {
  value: brand[];
};
export default function Brand(props: props) {
  return (
    <div className="container">
      <div className="brandContainer">
        {props.value.map((item, index) => (
          <button value={item.trademark_id} className="brandItem">
            <img src={item.image_trademark} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
