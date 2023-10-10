type TBookStatus = "available" | "rented" | "lost";

class Book {
  #title: string;
  #author: string;
  #year: number;
  #status: TBookStatus;

  public constructor(
    title: string,
    author: string,
    year: number,
    status: TBookStatus,
  ) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.#status = status;
  }

  public get title(): string {
    return this.#title;
  }

  public get author(): string {
    return this.#author;
  }

  public get status(): TBookStatus {
    return this.#status;
  }

  public set status(status: TBookStatus) {
    this.#status = status;
  }
}

class Library {
  #books: Book[];

  public constructor() {
    this.#books = [];
  }

  public addBook(book: Book): void {
    this.#books.push(book);
  }

  public borrowBook(title: string): void {
    const book: Book | undefined = this.#books.find(
      (book: Book) => book.title === title,
    );

    if (book) book.status = "rented";
  }

  public returnBook(title: string): void {
    const book: Book | undefined = this.#books.find(
      (book: Book) => book.title === title,
    );

    if (book) book.status = "available";
  }

  public findBooksByAuthor(author: string): Book[] {
    const result: Book[] = this.#books.filter(
      (book: Book) => book.author === author,
    );

    return result;
  }

  public findBooksByStatus(status: TBookStatus): Book[] {
    const result: Book[] = this.#books.filter(
      (book: Book) => book.status === status,
    );

    return result;
  }
}
