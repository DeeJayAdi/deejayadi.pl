import { useDispatch } from "react-redux";
import { setLang } from "../Storage/Reducers/Settings";

const LangDetector = (props) => {
  const dispatch = useDispatch();
  const lang = navigator.language.split("-").shift().toLowerCase();

  dispatch(setLang(lang));

  return <></>;
};

export default LangDetector;
