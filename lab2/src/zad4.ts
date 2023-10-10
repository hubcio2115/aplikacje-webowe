type BookStatus = "available" | "rented" | "lost";

class Book {
  #title: string;
  #author: string;
  #year: number;
  #status: BookStatus;

  constructor(title: string, author: string, year: number, status: BookStatus) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.#status = status;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get status() {
    return this.#status;
  }

  set status(status: BookStatus) {
    this.#status = status;
  }
}

class Library {
  #books: Book[];

  constructor() {
    this.#books = [];
  }

  addBook(book: Book) {
    this.#books.push(book);
  }

  borrowBook(title: string) {
    const book = this.#books.find((book) => book.title === title);

    if (book) book.status = "rented";
  }

  returnBook(title: string) {
    const book = this.#books.find((book) => book.title === title);

    if (book) book.status = "available";
  }

  findBooksByAuthor(author: string) {
    const result = this.#books.filter((book) => book.author === author);

    return result;
  }

  findBooksByStatus(status: BookStatus) {
    const result = this.#books.filter((book) => book.status === status);

    return result;
  }
}
