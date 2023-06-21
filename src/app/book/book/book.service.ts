import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../store/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) { }

  getBookList():Observable<IBook[]>{
    return this.http.get<IBook[]>('http://localhost:3000/books')
  }

  addNewBook(form:IBook):Observable<IBook>{
    return this.http.post<IBook>('http://localhost:3000/books',form)
  }

  deleteBook(id:number){
    return this.http.delete(`http://localhost:3000/books/${id}`)
  }

  updateBook(book:IBook){
    return this.http.put(`http://localhost:3000/books/${book.id}`,book)
  }
}
