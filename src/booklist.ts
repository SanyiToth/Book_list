import {Book} from "./book";

export class BookList {
    private _read: number = 0;
    private _notReadYet: number = 0;
    private _lastBook: Book;
    private _currentBook: Book;
    private _nextBook: Book;
    private _allTheBooks: Book[] = [];

    constructor(lastBook: Book, currentBook: Book, nextBook: Book) {
        this._lastBook = lastBook;
        this._currentBook = currentBook;
        this._nextBook = nextBook;
    }

    get read(): number {
        return this._read;
    }

    set read(number) {
        this._read = number;
    }

    get notReadYet(): number {
        return this._notReadYet;
    }

    set notReadYet(number) {
        this._notReadYet = number;
    }

    get allTheBooks(): Book[] {
        return this._allTheBooks;
    }

    get currentBook() {
        return this._currentBook;
    }

    set currentBook(book) {
        this._currentBook = book;
    }

    get lastBook(): Book {
        return this._lastBook;
    }

    set lastBook(book) {
        this._lastBook = book;
    }

    get nextBook(): Book {
        return this._nextBook;
    }

    set nextBook(book) {
        this._nextBook = book;
    }

    add(book: Book): void {
        this._allTheBooks.push(book);
        /* if (!this.currentBook) {
             this.currentBook = book;
         } else if (!this.nextBook) {
             this.nextBook = book;
         }*/
    }

    finishCurrentBook() {
        this.currentBook.read = true  //should mark the book that is currently being read as "read"
        this.currentBook.readDate = new Date(Date.now());  // Give it a read date of new Date(Date.now())
        this.lastBook = this.currentBook; // Change the last book read to be the book that just got finished
        this.currentBook = this.nextBook; // Change the current book to be the next book to be read
        for (let book = 0; book < this.allTheBooks.length; book++) {
            if (!this.allTheBooks[book].read && this.currentBook !== this.allTheBooks[book]) {
                this.nextBook = this.allTheBooks[book]; // Change the next book to be read property to be the first unread book you find in the list of books
                break;
            }
        }
    }


    countRead() {
        this.read = 0;
        this.allTheBooks.forEach((book) => {
            if (book.read) {
                this.read++;
            }
        })
        return this.read;
    }


    countNotReadYet() {
        this.notReadYet = 0;
        this.allTheBooks.forEach((book) => {
            if (!book.read) {
                this.notReadYet++;
            }
        })
        return this.notReadYet;
    }
}