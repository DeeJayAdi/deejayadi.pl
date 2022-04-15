import { Component } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Header />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
