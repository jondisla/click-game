import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "./components/Box/Box";
import characters from "./characters.json";

const App = () => (
  <div>
    <NavBar />
    {/* <CardsContainer /> */}
    <div className="d-flex flex-wrap flex-row justify-content-center col-lg-10 mx-auto">
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
  </div>
);

export default App;
