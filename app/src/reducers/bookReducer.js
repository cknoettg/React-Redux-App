import { FETCHING_BOOKS, BOOK_FETCH_SUCCESS, BOOK_FETCH_ERROR } from "../actions/bookAction";

const initialState = { books: [], fetchingBooks: false, error: "" };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS:
      return Object.assign({}, state, { fetchingBooks: true }); // if we're fetching simply trigger the boolean!
    case BOOK_FETCH_SUCCESS:
      return Object.assign({}, state, {
        books: [...state.books, action.payload], // if our promise was successfull, build out the dogs array.
        fetchingBooks: false // also, set our boolean to false, because we're no longer fetching
      });
    case BOOK_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingBooks: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching books" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching