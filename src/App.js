import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Info from './info';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      character: [],
      name:"",
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick(event){
      this.setState({
        name: this._name.value
      })
      axios.get(`https://swapi.dev/api/people/?search=${this.state.name}`)
      .then(response => {
        if(response.data.count === 0)
        {
          this.setState({
            error: true
          })
        }
        else{
        this.setState({
          character: response.data.results[0],
          error: false
        })
      }
      })
  }

  handleClear(event){
    this._name.value=""
    this.setState({
      character:[],
      name:""
    })
  }


  render(){
    return(
        <div>
          <h1>Star Wars Character Information Centre</h1>
          <div className="rules">
          <h2>How to use:</h2>
          <ol>
            <li>Type the name of your character in the search box.</li>
            <li>Hit on the search button.</li>
            <li>The details of your character will apear.</li>
            <li>Note:If wrong info comes on clicking search, try clicking on it again.</li>
          </ol>
          </div>
          <div className="search-box">
          <input type="text" placeholder="Search..." ref={value => this._name=value} />
          <button onClick={this.handleClick}>Search</button>
          <button onClick={this.handleClear}>Clear</button>
          </div>
          <div className="character-info">
          {this.state.error? <h2>No such character exists.</h2>:<Info item={this.state.character} />}
          </div>
        </div>
    )
  }
}

export default App;
