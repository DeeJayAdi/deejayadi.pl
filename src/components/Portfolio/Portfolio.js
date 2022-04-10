import "./Portfolio.css";

const projects = [
  {
    href: "https://anitastyle.pl",
    title: "Anita Style",
  },
  {
    href: "http://zegluga1.home.pl/orkiestra/pl/",
    title: "Żegluga Orkiestra",
  },
];

const Project = (props) => (
  <a className="project" href={props.href} target="blank">
    <p>{props.title}</p>
  </a>
);

const Portfolio = (props) => (
  <section className="portfolio" id="portfolio">
    <h1>My works</h1>
    <div className="projects">
      {projects.map((p, index) => (
        <Project key={index} title={p.title} href={p.href} />
      ))}
    </div>
  </section>
);

export default Portfolio;
