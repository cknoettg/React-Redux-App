import { FETCHING_BOOKS, BOOK_FETCH_SUCCESS, ISBN_SUCCESS, BOOK_FETCH_ERROR } from "../actions/bookAction";

const initialState = { books: [], isbns: [], fetchingBooks: false, error: "" };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS:
      return Object.assign({}, state, { fetchingBooks: true });
    case BOOK_FETCH_SUCCESS:
      return Object.assign({}, state, {
        books: [...state.books, action.payload],       
        fetchingBooks: false
      });
    case ISBN_SUCCESS:
      return Object.assign({}, state, {
      isbns: [...state.isbns, action.payload],
      fetchingBooks: false
      });
    case BOOK_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingBooks: false, 
        error: "Error fetching books"
      });
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching