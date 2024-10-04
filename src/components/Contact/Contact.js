import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./Contact.css";

const socialMediaList = [
  {
    title: "GitHub",
    href: "https://github.com/DeeJayAdi",
    icon: <AiFillGithub />,
  },
];

const SocialMediaLink = (props) => (
  <a href={props.href} target="blank" title={props.title}>
    {props.icon}
  </a>
);

const Contact = (props) => {
  return (
    <section className="contact" id="contact">
      <h1>Message me!</h1>
      <div className="email">
        <a className="email" href="mailto:kontakt@deejayadi.pl" target="blank">
          kontakt@deejayadi.pl
        </a>
      </div>
      <div className="socialMedia">
        {socialMediaList.map((bt, index) => (
          <SocialMediaLink key={index} title={bt.title} href={bt.href} icon={bt.icon} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
