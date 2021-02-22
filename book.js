export class Book {
    title;
    genre;
    author;
    #read=false;   //true or false
    #readDate;

    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read
        this.readDate
    }

    get read() {
        return this.#read;
    }

    set read(boolean) {
        this.#read = boolean;
    }

    get readDate() {
        return this.#readDate;
    }

    set readDate(currentDate) {
        this.#readDate = currentDate;
    }

}