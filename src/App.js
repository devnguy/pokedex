import React, { Component } from 'react';
import './App.css';
import pokemonList from './components/pokemonList2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList,
      input: '',
      filterBy: 'name'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterByName = this.handleFilterByName.bind(this);
    this.handleFilterByType = this.handleFilterByType.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  // refactor filters into one function, passing in arg 'name' or 'type'
  handleFilterByName() {
    if (this.state.filterBy !== 'name') {
      this.setState({ filterBy: 'name' });
    }
  }
  handleFilterByType() {
    if (this.state.filterBy !== 'type') {
      this.setState({ filterBy: 'type' });
    }
  }

  render() {

    let filteredPokemon;
    if (this.state.filterBy === 'name') {
      filteredPokemon = this.state.pokemonList.filter((pokemon) => pokemon.name.includes(this.state.input));
    } else if (this.state.filterBy === 'type') {
      filteredPokemon = this.state.pokemonList.filter((pokemon) => pokemon.type.includes(this.state.input));
    }
    
    const imgPath = 'https://raw.githubusercontent.com/hdn301/pokedex/gh-pages/sprites/pokemon/';
    const png = '.png';

    const renderedPokemon = filteredPokemon.map(
      (pokemon) => 
        <li key={pokemon.id} className="pokemon">
          <img src={imgPath + pokemon.id + png} alt={pokemon.name} className="pokemon-img"/>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
        </li>
      );

    return (
      <div className="container">
        <header>

          <div className="search">
            <input value={this.state.input} placeholder="Search" onChange={this.handleChange}></input>
          </div>
          <div className="filter-buttons">
            <button onClick={this.handleFilterByName}>Name</button>
            <button onClick={this.handleFilterByType}>Type</button>
            <p>Searching by: {this.state.filterBy}</p>
          </div>
        </header>

        <div className="pokemons">
          <ol>
            {renderedPokemon}
          </ol>
        </div>

      </div>
    );
  }
}

export default App;
