import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book as BookIcon, LucideAngularModule } from 'lucide-angular';
import type { AddBookForm } from '../../shared/book.type';

const initialValues: AddBookForm = {
  title: '',
  author: '',
  year: new Date().getFullYear(),
};

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './book-form.component.html',
})
export class BookFormComponent {
  @Output() addBook = new EventEmitter<AddBookForm>();

  title = initialValues.title;
  author = initialValues.author;
  year = initialValues.year;

  readonly BookIcon = BookIcon;

  resetForm() {
    this.title = initialValues.title;
    this.author = initialValues.author;
    this.year = initialValues.year;
  }

  handleAddBook() {
    if (confirm('Are you sure?')) {
      this.addBook.emit({
        title: this.title,
        author: this.author,
        year: this.year,
      });

      this.resetForm();
    }
  }
}
