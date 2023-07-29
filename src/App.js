import rickandmortyImg from "./img/rick-morty.jpeg";
import Characters from "./components/Characters";
import { useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  return (
    <div>
      <h1 className="title">Rick and morty</h1>
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
      ) : (
        <>
          <img src={rickandmortyImg} alt="imagen rick and morty" />
          <button onClick={reqApi} className="btn-search">
            Buscar Personaje
          </button>
        </>
      )}
    </div>
  );
}

export default App;