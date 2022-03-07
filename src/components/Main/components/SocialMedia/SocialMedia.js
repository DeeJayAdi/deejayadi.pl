import "./SocialMedia.css";

const Item = (props) => (
  <a className="button socialMedia" target="blank" href={props.link}>
    {props.label}
  </a>
);

const SocialMedia = (props) => (
  <div id="socialMedia" className="box box-info">
    <h1>Media społecznościowe</h1>
    <div className="socialMediaList">
      {props.list.map((item, index) => (
        <Item key={index} link={item.link} label={item.label} />
      ))}
    </div>
  </div>
);

export default SocialMedia;
