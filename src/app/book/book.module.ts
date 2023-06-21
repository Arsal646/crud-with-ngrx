import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { bookEffect } from './store/book.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature('book',bookReducer),
    EffectsModule.forFeature([bookEffect]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
