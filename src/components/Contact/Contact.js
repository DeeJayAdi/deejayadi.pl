import { useState } from "react";
import { AiFillGithub, AiFillYoutube, AiFillCheckCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import "./Contact.css";

const socialMediaList = [
  { href: "", title: "Facebook", icon: <BsFacebook /> },
  {
    title: "GitHub",
    href: "https://github.com/DeeJayAdi",
    icon: <AiFillGithub />,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/channel/UCKjm0Hr_DePr_EY4mi0vTfw",
    icon: <AiFillYoutube />,
  },
  {
    title: "Discord",
    href: "https://discord.gg/q9Cu4hyR8D",
    icon: <FaDiscord />,
  },
];

const SocialMediaLink = (props) => (
  <a href={props.href} target="blank" title={props.title}>
    {props.icon}
  </a>
);

const Contact = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(true);

  const handleContactForm = (e) => {
    e.preventDefault();
    setSend(false);
  };

  return (
    <section className="contact" id="contact">
      <h1>Do something together ;D</h1>
      <CSSTransition in={!send} timeout={1000} mountOnEnter classNames="send">
        <div className="sended">
          <h1>Message sended</h1>
          <AiFillCheckCircle />
        </div>
      </CSSTransition>
      <CSSTransition in={send} timeout={1000} unmountOnExit classNames="send">
        <form onSubmit={handleContactForm} className="contact">
          <input
            type="text"
            className="contactForm"
            placeholder="Full name"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            className="contactForm"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="contactForm"
            placeholder="Enter your message"
            rows="10"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="contactForm">Send</button>
        </form>
      </CSSTransition>
      <div className="email">
        <a className="email" href="mailto:kontakt@deejayadi.pl" target="blank">
          kontakt@deejayadi.pl
        </a>
      </div>
      <div className="socialMedia">
        {socialMediaList.map((bt, index) => (
          <SocialMediaLink
            key={index}
            title={bt.title}
            href={bt.href}
            icon={bt.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
