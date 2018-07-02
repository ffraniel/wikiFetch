import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:"",
      results:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchWiki = this.fetchWiki.bind(this);
  }

  handleChange(e){
    this.setState({
      input:e.target.value
    })
    this.fetchWiki(e.target.value);
  }

  fetchWiki(searchVal){
    var searchURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchVal}&format=json&origin=*`;
    return fetch(searchURL)
      .then(resbuffer=> resbuffer.json())
      .then(res=>{
        this.setState({
          results:res
        })
      })
      .catch(console.log)

  }

  render() {
    return (
      <div className="App">
        <h4>Wikipedi Live Search</h4>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        {this.state.input && <p>You are searching for {this.state.input}</p>}
      </div>
    );
  }
}

export default App;
