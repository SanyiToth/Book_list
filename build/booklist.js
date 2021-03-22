export class BookList {
    constructor(lastBook, currentBook, nextBook) {
        this._read = 0;
        this._notReadYet = 0;
        this._allTheBooks = [];
        this._lastBook = lastBook;
        this._currentBook = currentBook;
        this._nextBook = nextBook;
    }
    get read() {
        return this._read;
    }
    set read(number) {
        this._read = number;
    }
    get notReadYet() {
        return this._notReadYet;
    }
    set notReadYet(number) {
        this._notReadYet = number;
    }
    get allTheBooks() {
        return this._allTheBooks;
    }
    get currentBook() {
        return this._currentBook;
    }
    set currentBook(book) {
        this._currentBook = book;
    }
    get lastBook() {
        return this._lastBook;
    }
    set lastBook(book) {
        this._lastBook = book;
    }
    get nextBook() {
        return this._nextBook;
    }
    set nextBook(book) {
        this._nextBook = book;
    }
    add(book) {
        this._allTheBooks.push(book);
        /* if (!this.currentBook) {
             this.currentBook = book;
         } else if (!this.nextBook) {
             this.nextBook = book;
         }*/
    }
    finishCurrentBook() {
        this.currentBook.read = true; //should mark the book that is currently being read as "read"
        this.currentBook.readDate = new Date(Date.now()); // Give it a read date of new Date(Date.now())
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
        });
        return this.read;
    }
    countNotReadYet() {
        this.notReadYet = 0;
        this.allTheBooks.forEach((book) => {
            if (!book.read) {
                this.notReadYet++;
            }
        });
        return this.notReadYet;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2xpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8iLCJzb3VyY2VzIjpbImJvb2tsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxRQUFRO0lBUWpCLFlBQVksUUFBYyxFQUFFLFdBQWlCLEVBQUUsUUFBYztRQVByRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBSXhCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsSUFBSTtRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBSTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBVTtRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCOzs7O1lBSUk7SUFDUixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBLENBQUUsNkRBQTZEO1FBQzNGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUUsOENBQThDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGtFQUFrRTtRQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyx5REFBeUQ7UUFDM0YsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFHQUFxRztnQkFDN0ksTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBR0QsU0FBUztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBR0QsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKIn0=