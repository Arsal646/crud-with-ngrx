import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookIsLoading, selectBooksList } from '../store/book.selector';
import { Observable } from 'rxjs';
import { IBook } from '../store/book.model';
import { BookService } from './book.service';
import { addNewBook, deleteBook, getBook, updateBook } from '../store/book.action';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books$: Observable<IBook[]> | undefined;

  isLoading$: Observable<any> | undefined;

  form!:FormGroup 

  editMode:boolean=false

  dataToUpdate:IBook={
    id: undefined,
    name: '',
    writer: ''
  }

  constructor(
    private store: Store,
    private bookService: BookService,
    private fb:FormBuilder
    ) {}


  async ngOnInit() {

    this.formInit()
    await this.getBookData();
    this.initSubscriptions();

  }

  formInit(){

    this.form=this.fb.group({
      id: Math.random,
      name: '',
      writer: '',
    })
  }

  add() {
    let form=this.form.value
    this.store.dispatch(addNewBook({book:form}))
  }
  update(){
    let form:IBook=this.form.value

    this.store.dispatch(updateBook({book:form}))
  }

  getBookData() {
    this.store.dispatch(getBook());
  }

  private initSubscriptions(): void {
    this.books$ = this.store.pipe(select(selectBooksList));
    this.isLoading$ = this.store.pipe(select(selectBookIsLoading));
  }

  delete(book:IBook){
    this.store.dispatch(deleteBook({id:book.id}))
  }
  edit(book:IBook){

    this.form.setValue({
      id:book.id,
      name:book.name,
      writer:book.writer
    })
    this.editMode=true
  }
  cancel(){
    this.editMode=false
  }
}
