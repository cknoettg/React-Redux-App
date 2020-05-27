import { FETCHING_BOOKS, BOOK_FETCH_SUCCESS, BOOK_FETCH_ERROR } from "../actions/bookAction";

const initialState = { books: [], fetchingBooks: false, error: "" };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS:
      return{...state, fetchingBooks: true };
    case BOOK_FETCH_SUCCESS:
      return {...state, 
        books: [...state.books, ...action.payload],       
        fetchingBooks: false
      };
    case BOOK_FETCH_ERROR:
      return {...state,
        fetchingBooks: false, 
        error: "Error fetching books"
      };
    default:
      return state;
  }
};