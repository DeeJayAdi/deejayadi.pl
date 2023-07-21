import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const ListElement = ({ label, href }) => {
  const lang = useSelector((state) => state.settings.activeLang);
  const handleClick = (a) => {
    a.preventDefault();
    const e = document.getElementById(href);

    if (e) {
      e.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "DeeJay Adi", `#${href}`);
    }
  };

  return (
    <div onClick={handleClick} className="listElement">
      {label[lang]}
    </div>
  );
};

const List = ({ show, handleShow }) => {
  const listElements = useSelector((state) => state.listElements);

  return (
    <div className={show ? "list active" : "list"} onClick={() => handleShow()}>
      {listElements.map((element, index) => (
        <ListElement key={index} label={element.label} href={element.href} />
      ))}
    </div>
  );
};

export default List;
