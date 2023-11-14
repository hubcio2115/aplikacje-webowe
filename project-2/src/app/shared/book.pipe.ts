import { Pipe, PipeTransform } from '@angular/core';
import type { Book } from './book.type';

@Pipe({
  name: 'book',
  standalone: true,
})
export class BookPipe implements PipeTransform {
  public transform({ title, year }: Book, maxLength?: number): string {
    return `${title.slice(0, maxLength)}${
      title.length >= 30 ? '...' : ''
    } (published in: ${year})`;
  }
}
