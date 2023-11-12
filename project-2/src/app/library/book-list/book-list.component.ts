import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '../../shared/book.type';
import { BookPipe } from '../../shared/book.pipe';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookPipe, LucideAngularModule],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input({ required: true }) books!: Book[];
  @Output() deleteBook = new EventEmitter<string>();

  readonly Trash2Icon = Trash2Icon;

  handleDeleteBook(bookUUID: string) {
    if (confirm('Are you sure?')) this.deleteBook.emit(bookUUID);
  }
}
