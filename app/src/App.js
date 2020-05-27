import React, { Component } from "react";
import './App.css';
import { connect } from "react-redux";
import { fetchBooks } from "./actions/bookAction";

//Redux app using OpenLibrary API from archive.org
// by Corey M. Knoettgen

class App extends Component {
  // Constructor(props){  
  //   super(props);  
  // } 
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
            {this.props.books.map((book,index) => {
            console.log(book)
            return <p key={book}>{book.title_suggest}</p>
            //<img src={book.thumbnail_url} alt="book cover" />
              //return <img key={book} src={book.thumbnail_url} alt="book cover" />;
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
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    books: state.books, // dogs for when we have the data!
    error: state.error, // error for when we mispell something!
    fetchingBooks: state.fetchingBooks // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchBooks })(App);