import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "./components/Box/Box";
import characters from "./characters.json";
import "./index.css"

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      {characters
        .sort(() => 0.6 - Math.random())
        .map(x => (
          <Box
            name={x.name}
            image={x.image}
            location={x.location}
            occupation={x.occupation}
            id={x.id}
          />
        ))}
    </div>
  </div >
);

export default App;
