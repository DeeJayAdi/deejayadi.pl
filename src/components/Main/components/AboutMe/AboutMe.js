import "./AboutMe.css";

const AboutMe = (props) => (
  <div id="aboutme" className="box box-info noselect">
    {/* <h1>O mnie</h1> */}
    {/* <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, sunt
      exercitationem? Quae placeat in, suscipit beatae impedit totam ex dolor
      magni tempora. Delectus consequatur aspernatur quia aliquam voluptatum
      nobis eos odit fuga, tempore facilis sunt, possimus laboriosam mollitia
      reiciendis veniam dolorem alias. Ex sed dolore dicta commodi ut excepturi
      officia ipsam alias repellendus pariatur ea quasi reiciendis delectus ipsa
      ad nesciunt quam, deserunt necessitatibus. Accusamus debitis, placeat
      expedita incidunt maiores provident fugit! Debitis, repellendus
      consequuntur! Necessitatibus reprehenderit quam rem. Incidunt inventore
      commodi nam dolores corrupti minus, laborum repellendus. Vel inventore eos
      aliquid ad eaque eius, distinctio molestias eveniet earum expedita!
    </p> */}
    <h2>Czego używam?</h2>
    <div className="tlist">
      {props.ltat.map((i, index) => (
        <img
          key={index}
          className="ticon"
          src={i.imgLink}
          alt={i.alt}
          title={i.alt}
        />
      ))}
    </div>
  </div>
);
export default AboutMe;
