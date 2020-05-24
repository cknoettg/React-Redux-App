import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOK_FETCH_SUCCESS = "BOOK_FETCH_SUCCESS";
export const ISBN_SUCCESS = "ISBN_SUCCESS";
export const BOOK_FETCH_ERROR = "BOOK_FETCH_ERROR";

const ISBN = "search.json?subject=hackers&limit=10";

export const fetchBooks = () => {
    const promise = axios.get(`https://openlibrary.org/${ISBN}`);
    return dispatch => {
      dispatch({ type: FETCHING_BOOKS });
      promise
        //grab first 10 titles by subject
        .then(response => {
          console.log(response);
          console.log(response.data.docs);
          const book_titles = response.data.docs.map(book=>book.title);
          const isbns = response.data.docs.map(book=>book.isbn[0]);
          console.log(isbns);
          dispatch({ type: BOOK_FETCH_SUCCESS, payload: book_titles });
          dispatch({ type: ISBN_SUCCESS, payload: isbns });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: BOOK_FETCH_ERROR });
        });
    };
  };