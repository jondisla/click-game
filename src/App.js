import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Box from "./components/Box/Box";
import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsConatiner/CardsContainer";
import Characters from "./components/Characters/Characters";
import characters from "./characters.json";

const App = () => (
  <div>
    <NavBar />
    <Header />
    <Box />
    <CardsContainer />
    <Characters
      name={characters[0].name}
      image={characters[0].image}
      occupation={characters[0].occupation}
      location={characters[0].location}
    />
    <Characters
      name={characters[1].name}
      image={characters[1].image}
      occupation={characters[1].occupation}
      location={characters[1].location}
    />
    <Characters
      name={characters[2].name}
      image={characters[2].image}
      occupation={characters[2].occupation}
      location={characters[2].location}
    />
    <Characters
      name={characters[3].name}
      image={characters[3].image}
      occupation={characters[3].occupation}
      location={characters[3].location}
    />
    <Characters
      name={characters[4].name}
      image={characters[4].image}
      occupation={characters[4].occupation}
      location={characters[4].location}
    />
  </div>
);

export default App;
