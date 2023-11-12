export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  rented: boolean;
}

export type AddBookForm = Omit<Book, 'id' | 'rented'>;
