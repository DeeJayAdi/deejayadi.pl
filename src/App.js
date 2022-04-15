import { Component } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

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
