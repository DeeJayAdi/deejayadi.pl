import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/Routes/HomePage/HomePage";
import Portfolio from "./Components/Routes/Portfolio/Portfolio";

class App extends Component {
  state = {
    skillList: [
      { label: "html", percent: 70 },
      { label: "js", percent: 80 },
      { label: "css", percent: 60 },
      { label: "reactjs", percent: 60 },
    ],
  };
  render() {
    return (
      <BrowserRouter>
        <div id="top"></div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<HomePage skills={this.state.skillList} />}
          />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
