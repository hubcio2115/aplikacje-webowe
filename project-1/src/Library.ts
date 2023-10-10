import Author from "./Author";
import Book from "./Book";
import BookStatus from "./BookSatus";

// eslint-disable-next-line
class Library {
  #books: Book[];

  public constructor() {
    this.#books = [];
  }

  private get books(): Book[] {
    return this.#books;
  }

  private set books(books: Book[]) {
    this.#books = books;
  }

  public addBook(book: Book): void {
    this.#books.push(book);
  }

  public removeBook(title: string): void {
    this.books = this.#books.filter((book: Book) => book.title === title);
  }

  public borrowBook(title: string): void {
    const book: Book | undefined = this.#books.find(
      (book: Book) => book.title === title,
    );

    if (book) book.status = BookStatus.RENTED;
  }

  public returnBook(title: string): void {
    const book: Book | undefined = this.#books.find(
      (book: Book) => book.title === title,
    );

    if (book) book.status = BookStatus.AVAILABLE;
  }

  public findBooksByAuthor(author: Author): Book[] {
    const result: Book[] = this.#books.filter(
      (book: Book) => book.author === author,
    );

    return result;
  }

  public findBooksByStatus(status: BookStatus): Book[] {
    const result: Book[] = this.#books.filter(
      (book: Book) => book.status === status,
    );

    return result;
  }
}
