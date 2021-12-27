import "./App.css";
import "../src/styles/styles.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parteners from "./components/Parteners";
import Card from "./components/Card";

import Whytreedifi from "./components/Whytreedifi";
import Featers from "./components/Featers";
import Upcoming from "./components/Upcoming";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Parteners />
      <Card />
      <Whytreedifi />
      <Featers />
      <Upcoming />
    </div>
  );
}

export default App;
