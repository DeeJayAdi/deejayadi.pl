import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../Storage/Reducers/Settings";
import "./style.scss";

const LangFlag = ({ lang, active }) => {
  const { code, flag } = lang;
  const { activeLang } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (code !== activeLang) {
      dispatch(setLang(code));
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000);
    }
  };

  return (
    <div className={active ? "flag active" : "flag"} onClick={handleClick}>
      <img src={flag} alt="" />
    </div>
  );
};

const LangSelector = (props) => {
  const { activeLang, availableLangs } = useSelector((state) => state.settings);

  return (
    <div className="langSelector">
      {availableLangs.map((lang, index) => (
        <LangFlag key={index} lang={lang} active={lang.code === activeLang} />
      ))}
    </div>
  );
};

export default LangSelector;
