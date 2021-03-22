export class Book {
    constructor(title, genre, author) {
        this._read = false; //true or false
        this._readDate = undefined;
        this._title = title;
        this._genre = genre;
        this._author = author;
    }
    get read() {
        return this._read;
    }
    set read(read) {
        this._read = read;
    }
    get readDate() {
        return this._readDate;
    }
    set readDate(currentDate) {
        this._readDate = currentDate;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyIsInNvdXJjZXMiOlsiYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sSUFBSTtJQU9iLFlBQVksS0FBYSxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBSGhELFVBQUssR0FBWSxLQUFLLENBQUMsQ0FBRyxlQUFlO1FBQ3pDLGNBQVMsR0FBcUIsU0FBUyxDQUFBO1FBRzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLElBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsV0FBVztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0NBQ0oifQ==