import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookFormComponent } from './library/book-form/book-form.component';
import { BookListComponent } from './library/book-list/book-list.component';
import type { AddBookForm, Book } from './shared/book.type';
import { v4 as uuidv4 } from 'uuid';
import data from './shared/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookFormComponent, BookListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books: Book[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.books = data;
    }, 2000);
  }

  addBook(book: AddBookForm) {
    this.books.push({ id: uuidv4(), rented: false, ...book });
  }

  deleteBook(bookUUID: string) {
    const bookIndex = this.books.findIndex((book) => book.id === bookUUID);

    this.books.splice(bookIndex, 1);
  }

  toggleBook(title: string) {
    const book = this.books.find((book) => book.title === title);

    if (book) book.rented = !book.rented;
  }
}
