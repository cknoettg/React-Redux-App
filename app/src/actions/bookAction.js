import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const FETCHING_THUMBNAILS = "FETCHING_THUMBNAILS";
export const BOOK_FETCH_SUCCESS = "BOOK_FETCH_SUCCESS";
export const ISBN_SUCCESS = "ISBN_SUCCESS";
export const BOOK_FETCH_ERROR = "BOOK_FETCH_ERROR";

const Search = "search.json?subject=hackers&limit=10";
const ISBN = "ISBN:9780980200447&jscmd=details&format=json";

export const fetchBooks = () => {
    const promise = axios.get(`https://openlibrary.org/${Search}`);
    return dispatch => {
      dispatch({ type: FETCHING_BOOKS });
      promise
        //grab first 10 titles by subject
        .then(response => {
          console.log(response);
          console.log(response.data.docs);
          //const book_titles = response.data.docs.map(book=>book.title);
          //const book_titles = response.data.docs.map(book=>book);
          //const isbns = response.data.docs.map(book=>book.isbn[0]);
          //console.log(book_titles);
          //console.log(isbns);
          //dispatch({ type: BOOK_FETCH_SUCCESS, payload: book_titles });
          dispatch({ type: BOOK_FETCH_SUCCESS, payload: response.data.docs });
          //dispatch({ type: ISBN_SUCCESS, payload: isbns });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: BOOK_FETCH_ERROR });
        });
    };
  };

  //TODO: Need to grab ALL the ISBN's, not just one
  export const fetchThumbnails = () => {
    const promise = axios.get(`https://openlibrary.org/api/books?bibkeys=${ISBN}`);
    return dispatch => {
      dispatch({ type: FETCHING_THUMBNAILS });
      promise
        //grab thumbnails by ISBN
        .then(response => {
          console.log(response);
          console.log(response.data.docs);
          
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: BOOK_FETCH_ERROR });
        });
    };

  };