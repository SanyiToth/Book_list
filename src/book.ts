export class Book {
    _title: string;
    _genre: string;
    _author: string;
    private _read: boolean = false;   //true or false
    private _readDate: Date | undefined = undefined

    constructor(title: string, genre: string, author: string) {
        this._title = title;
        this._genre = genre;
        this._author = author;
    }

    get read(): boolean {
        return this._read;
    }

    set read(read: boolean) {
        this._read = read;
    }

    get readDate(): Date | undefined {
        return this._readDate;
    }

    set readDate(currentDate) {
        this._readDate = currentDate;
    }
}
