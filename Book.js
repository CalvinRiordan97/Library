const fs = require('fs');


const Book = class{

    constructor(title, author, release, copies, available){
        this.title = title
        this.author = author
        this.release = release
        this.copies = copies
        this.available = available
    }
}


module.exports = Book