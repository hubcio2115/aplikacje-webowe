import Author from "./Author";
import BookStatus from "./BookSatus";

type TYear = `${number}${number}${number}${number}`;

export default class Book {
  #title: string;
  #author: Author;
  #year: TYear;
  #status: BookStatus;
  #numberOfPages: number;

  public constructor(
    title: string,
    author: Author,
    year: TYear,
    status: BookStatus,
    numberOfPages: number,
  ) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.#status = status;
    this.#numberOfPages = numberOfPages;
  }

  public get title(): string {
    return this.#title;
  }

  public get author(): Author {
    return this.#author;
  }

  public get status(): BookStatus {
    return this.#status;
  }

  public set status(status: BookStatus) {
    this.#status = status;
  }
}
