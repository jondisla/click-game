import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "./components/Box/Box";
import characters from "./characters.json";
import "./index.css";

class App extends Component {
  state = {
    characters
  }
  randomchar = () => {
    const newcharacters = this.state.characters
      .sort(() => 0.6 - Math.random())
    this.setState({ newcharacters })
  }
  render() {

    return (
      <div>
        <NavBar />
        <div className="content">
          {this.state.characters
            .map(char => (
              <Box
                name={char.name}
                image={char.image}
                location={char.location}
                occupation={char.occupation}
                id={char.id}
                key={char.id}
                randomcharacter={this.randomchar}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default App;
