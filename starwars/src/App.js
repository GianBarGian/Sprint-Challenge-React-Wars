import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import ButtonList from './components/ButtonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: "",
      next: "",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, previous: data.previous, next: data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  updateStarwarsChar = (string) => {
    if (string === "previous") {
      this.getCharacters(this.state.previous);
    }
    if (string === "next") {
      this.getCharacters(this.state.next);
    }
  }


  render() {
    const { starwarsChars } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={starwarsChars}/>
        <ButtonList updateStarwarsChar={this.updateStarwarsChar} />
      </div>
    );
  }
}

export default App;
