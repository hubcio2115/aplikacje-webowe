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
  protected books: Book[] = [];

  public ngOnInit(): void {
    setTimeout(() => {
      this.books = data;
    }, 2000);
  }

  protected addBook(book: AddBookForm): void {
    this.books.push({ id: uuidv4(), rented: false, ...book });
  }

  protected deleteBook(bookUUID: string): void {
    const bookIndex: number = this.books.findIndex(
      (book: Book) => book.id === bookUUID,
    );

    this.books.splice(bookIndex, 1);
  }

  protected toggleBook(title: string): void {
    const book: Book | undefined = this.books.find(
      (book: Book) => book.title === title,
    );

    if (book) book.rented = !book.rented;
  }
}
