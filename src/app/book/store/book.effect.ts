import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import * as bookAction from './book.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { BookService } from '../book/book.service';
import { IBook } from './book.model';

@Injectable()
export class bookEffect {
  constructor(private action: Actions, private bookService: BookService) {}

  getAllBook$ = createEffect(() =>
    this.action.pipe(
      ofType(bookAction.getBook.type),
      switchMap((item) => this.bookService.getBookList()),
      map((book: IBook[]) => bookAction.getBookSuccess({ books: book }))
    )
  );

  addNewBook$=createEffect(()=>
  this.action.pipe(
      ofType(bookAction.addNewBook),
      tap(item=>console.log(item)),
      switchMap(({book})=>this.bookService.addNewBook(book)),
      map((item:IBook)=>{
          console.log(item)
          return bookAction.addNewBookSuccess({book:item})
      })
  )
  )

  deleteBooksAPI$ = createEffect(() => {
    return this.action.pipe(
      ofType(bookAction.deleteBook),
      switchMap((actions) => {
        return this.bookService.deleteBook(actions.id).pipe(
          map(() => {
            return bookAction.deleteBookSuccess({ id: actions.id });
          })
        );
      })
    );
  });


  updateBookAPI$ = createEffect(() => {
    return this.action.pipe(
      ofType(bookAction.updateBook),
      switchMap(({book}) => {
        return this.bookService.updateBook(book).pipe(
          map((item:any) => {
            console.log(item)
            return bookAction.updateBookSuccess({ book:book });
          })
        );
      })
    );
  });


 

 
}
