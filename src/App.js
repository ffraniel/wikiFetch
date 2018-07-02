import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import LinkFran from './LinkFran.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:"",
      results:{
        names:[],
        details:[],
        links:[]
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchWiki = this.fetchWiki.bind(this);
  }

  handleChange(e){
    this.setState({
      input:e.target.value
    })
    if(this.state.input.length === 0) {
      this.setState({
        results:{
          names:[],
          details:[],
          links:[]
        }  
      })
    }
    this.fetchWiki(e.target.value);
  }

  fetchWiki(searchVal){
    var searchURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchVal}&format=json&origin=*`;
    return fetch(searchURL)
      .then(resbuffer=> resbuffer.json())
      .then(res=>{
        let fixedRes;
        res[1] !== undefined ? 
        fixedRes = {
          names:res[1],
          details:res[2],
          links:res[3]
        } :
        fixedRes = {
            names:[],
            details:[],
            links:[]
          }          
        this.setState({
          results:fixedRes
        })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <h4 className="title">Wikipedi Live Search</h4>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        {this.state.input && <p>You are searching for {this.state.input}</p>}
        <List results={this.state.results} />
        <LinkFran />
      </div>
    );
  }
}

export default App;
