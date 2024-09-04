import React, { useState } from 'react';
import './App.css';

const fetchData = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

function App() {
  const [pokemon, setPokemon] = useState(null);

  const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    const data = await fetchData(randomId);
    setPokemon(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRandomPokemon}>Get Random Pokemon</button>
        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name}
            style={{ width: 200, height: 200, backgroundColor: '#d6d6d6', borderRadius: 100 }}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;