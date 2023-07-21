import React from "react";
import { Transition } from "react-transition-group";
import "./style.scss";

const Hamburger = ({ show, handleShow }) => (
  <div className="hamburger" onClick={() => handleShow()}>
    <Transition in={show} timeout={300}>
      {(state) => (
        <>
          <div className={"cool-animation-" + state}></div>
          <div className={"cool-animation-" + state}></div>
          <div className={"cool-animation-" + state}></div>
        </>
      )}
    </Transition>
  </div>
);

export default Hamburger;
