import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const BOOK_FETCH_SUCCESS = "DOG_FETCH_SUCCESS";
export const BOOK_FETCH_ERROR = "DOG_FETCH_ERROR";

const ISBN = "ISBN:9780980200447";

export const fetchBooks = () => {
    const promise = axios.get(`https://openlibrary.org/api/books?bibkeys=${ISBN}&jscmd=details&format=json`);
    return dispatch => {
      dispatch({ type: FETCHING_BOOKS }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          console.log(response);
          console.log(response.data[`${ISBN}`]);
          dispatch({ type: BOOK_FETCH_SUCCESS, payload: response.data[`${ISBN}`] }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: BOOK_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };