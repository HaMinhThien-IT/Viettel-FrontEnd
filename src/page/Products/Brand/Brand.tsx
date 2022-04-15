import React, { useState } from "react";
import { brand } from "../../../model/Option";
import "./Brand.css";
type props = {
  value: brand[];
  getIdBrand: (id: string) => void
};
export default function Brand(props: props) {
  function handleAddrTypeChangex(e: any) {
    props.getIdBrand(e.currentTarget.value)
  }
  return (
    <div className="container">
      <div className="brandContainer">
        {props.value.map((item, index) => (
          <button key={index} onClick={handleAddrTypeChangex} value={item.trademark_id} className="brandItem">
            <img src={item.image_trademark} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
