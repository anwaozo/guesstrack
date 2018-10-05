import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Aggregate extends Component{
  render(){
    return(
        <div style={{width: '40%', display: 'inline-block'}}>
          <h2 style={{color: '#545454'}}>Number Text</h2>
        </div>
    );
  }
}

class Search extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type = "text"/>
        Search
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: '40%', display: 'inline-block'}}>

        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}
class App extends Component {
  render() {
      let name ='Adam'
    return (
      <div className="App">
      <h1>GuessTrack</h1>
      <Aggregate/>
       <Aggregate/>
       <Search/>
       <Playlist/>
      
      </div>
    );
  }
}

export default App;
