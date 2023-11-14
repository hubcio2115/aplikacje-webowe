import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book as BookIcon, LucideAngularModule } from 'lucide-angular';
import type { AddBookForm } from '../../shared/book.type';
import { type LucideIconData } from 'lucide-angular/icons/types';

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
  @Output() public addBook: EventEmitter<AddBookForm> =
    new EventEmitter<AddBookForm>();

  protected title: string = initialValues.title;
  protected author: string = initialValues.author;
  protected year: number = initialValues.year;

  protected readonly BookIcon: LucideIconData = BookIcon;

  protected resetForm(): void {
    this.title = initialValues.title;
    this.author = initialValues.author;
    this.year = initialValues.year;
  }

  protected handleAddBook(): void {
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
