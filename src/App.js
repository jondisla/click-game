import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "./components/Box/Box";
import characters from "./characters.json";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {characters
            .sort(() => 0.6 - Math.random())
            .map(char => (
              <Box
                name={char.name}
                image={char.image}
                location={char.location}
                occupation={char.occupation}
                id={char.id}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default App;
