import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '../../shared/book.type';
import { BookPipe } from '../../shared/book.pipe';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { type LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookPipe, LucideAngularModule],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input({ required: true }) public books!: Book[];
  @Output() public deleteBook: EventEmitter<string> =
    new EventEmitter<string>();

  protected readonly Trash2Icon: LucideIconData = Trash2Icon;

  protected handleDeleteBook(bookUUID: string): void {
    if (confirm('Are you sure?')) this.deleteBook.emit(bookUUID);
  }
}
