import React, { Component } from 'react';
import './App.css';
// import { request } from 'http';

class App extends Component {
  
  state = {
    loading: false, 
    comic: null
  }

// searchHandler = this.searchHandler.bind(this )

  async componentDidMount() {
    const url = 'https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=a93ddd972615dbdf44cf20c09e216ac3';
    const response = await fetch(url);
    const fetchedData = await response.json();
    this.setState({ comic: fetchedData.data.results });
  }

  render() {   
    return (
      <div className="app">

      {this.state.loading || !this.state.comic ? (
        <div className="loading">Loading</div>
        ) : (
        <div className="container">

          <form>
            <input type="text" 
                    // onChange={this.searchHandler}
            />
            <button type="button">Search</button>
          </form>

          <div className="comics">
            {this.state.comic.map((value, index) => {
              return (
                <div className="comic" key={index}>
                  <h4>{value.title}</h4>
                  <img className="comic-thumbnail" alt="deadpool" src={`${value.thumbnail.path}.${value.thumbnail.extension}`}/> 
                </div>
              )
            })};
          </div>
        </div>
      )}
      </div>
    );
  }
}

export default App;
