import { createReducer, on } from '@ngrx/store';
import { IBookState } from './book.model';

import * as bookAction from './book.action';

const newBook = [
  {
    id: 1,
    name: 'angular',
    writer: 'Arslan',
  },
];

export const initialState: IBookState = {
  books: [],
  isLoading: false,
};

export const bookReducer = createReducer(
  initialState,
  on(bookAction.getBook, (state) => {
    console.log('hiii');
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(bookAction.getBookSuccess, (state, { books }) => {
    console.log('hiii');
    return {
      ...state,
      books,
      isLoading: false,
    };
  }),


  on(bookAction.addNewBook, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  
  on(bookAction.addNewBookSuccess, (state, { book }) => {
    return {
      ...state,
      books:[...state.books,book],
      isLoading: false,
    };
  }),

  on(bookAction.deleteBook,(state,{id})=>{
    return {
        ...state,
        isLoading:true
    }
  }),
  on(bookAction.deleteBookSuccess,(state,{id})=>{
    return{
        books:state.books.filter(book=>book.id!==id),
        isLoading:false
    }
  }),

  on(bookAction.updateBook,(state,{book})=>{
    return {
        ...state,
        isLoading:true
    }
  }),
  on(bookAction.updateBookSuccess,(state,{book})=>{
 
    return {
        ...state,
        books: state.books.map((b) => b.id === book.id ? book : b),
        isLoading:false
    }
  })
);
