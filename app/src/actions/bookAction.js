import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOK_FETCH_SUCCESS = "DOG_FETCH_SUCCESS";
export const BOOK_FETCH_ERROR = "DOG_FETCH_ERROR";

export const fetchBooks = () => {
    const promise = axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:0385472579`);
    return dispatch => {
      dispatch({ type: FETCHING_BOOKS }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          dispatch({ type: BOOK_FETCH_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: BOOK_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };