import "./GoToId.css";

const GoToId = (props) => {
  const id = document.getElementById(props.to);

  if (id) window.scrollTo({ top: id.offsetTop, behavior: "smooth" });

  return (
    <div className="goToId" title={props.title}>
      {props.label}
    </div>
  );
};

export default GoToId;
