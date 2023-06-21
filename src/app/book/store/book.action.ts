import { createAction, props } from "@ngrx/store";
import { IBook } from "./book.model";


export const getBook=createAction('[Book Comp] get book')

export const getBookSuccess=createAction('[Book Comp] get book success',props<{books:IBook[]}>())

export const addNewBook=createAction('[book comp] add new book',props<{book:IBook}>())

export const addNewBookSuccess=createAction('[book comp] add new book success',props<{book:IBook}>())

export const deleteBook=createAction('[book comp] delete book',props<{id:number}>())

export const deleteBookSuccess=createAction('[book comp] delete book success',props<{id:number}>())

export const updateBook=createAction('[book comp] update book',props<{book:IBook}>())

export const updateBookSuccess=createAction('[book comp] book update success',props<{book:IBook}>())
