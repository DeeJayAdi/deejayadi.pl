import "./AboutMe.css";

const LanguagesToolsAndTechnologiesElement = (props) => (
  <img
    className="languagestoolsandtechnologieselement"
    src={props.imgLink}
    alt={props.alt}
  />
);

const LanguagesToolsAndTechnologies = (props) => (
  <div className="container languagestoolsandtechnologies">
    <h1>Languages, Tools and Technologies</h1>
    <div>
      {props.LanguagesToolsAndTechnologiesElement.map((e, index) => (
        <LanguagesToolsAndTechnologiesElement
          key={index}
          imgLink={e.imgLink}
          alt={e.alt}
        />
      ))}
    </div>
  </div>
);

const AboutMe = (props) => (
  <div className="box aboutme">
    <h1>About me</h1>
    <LanguagesToolsAndTechnologies
      LanguagesToolsAndTechnologiesElement={
        props.LanguagesToolsAndTechnologiesElement
      }
    />
  </div>
);

export default AboutMe;
