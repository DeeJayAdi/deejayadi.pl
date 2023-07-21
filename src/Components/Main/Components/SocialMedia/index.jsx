import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const SocialMedia = (props) => {
  const id = "socialmedia";
  const c = useSelector((state) => state.content[id]);
  const lang = useSelector((state) => state.settings.activeLang);

  return (
    <div id={id}>
      <h1>{c.label[lang]}</h1>
    </div>
  );
};

export default SocialMedia;
