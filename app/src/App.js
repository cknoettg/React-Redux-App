import React, { Component } from "react";
import './App.css';
import { connect } from "react-redux";
import { fetchBooks } from "./actions/bookAction";

//Redux app using OpenLibrary API from archive.org
// by Corey M. Knoettgen

class App extends Component {
  
  componentDidMount() {
    this.props.fetchBooks();
  }


  render() {
    return (
      <div className="App">
        <h1>Open Library with Redux</h1>
        {this.props.fetchingBooks ? (
          <h3>Hold tight, we're fetching your books...</h3>
        ) : (
          <div className="App-intro">
            {this.props.books.map(book => {
            console.log(book)
            return <p key={book.title_suggest}>{book.title_suggest}</p>
            })}
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books, 
    error: state.error, 
    fetchingBooks: state.fetchingBooks
  };
};

export default connect(mapStateToProps, { fetchBooks })(App);