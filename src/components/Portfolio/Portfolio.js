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
  <div className="project" onClick={() => (window.location.href = props.href)}>
    <div>
      <span>Go to</span> <span>{props.title}</span>
    </div>
  </div>
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
