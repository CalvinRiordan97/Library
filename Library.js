const fs = require('fs');
const Book = require('./Book');


const Library = class{

    constructor(catalog){
        this.catalog = catalog
        this.dict = populateLibrary(catalog)
    }

    //Lookup a book in the catalog given an ISBN
    lookup(isbn){
        console.log(this.dict[isbn].title+', by '+this.dict[isbn].author+', '+this.dict[isbn].release)
    }  
    

    //Add a book to the library
    add(isbn, amount){
        //Since JavaScript doesn't have overload functions we need to cheeck if the second parameter was passed a value and if not to assign it a value
        if (typeof amount == 'undefined')
            amount = 1

        //From my understanding we can only add books listed in the catalog so we must check this
        if (isbn in this.dict){
            this.dict[isbn].copies =  this.dict[isbn].copies+amount
            this.dict[isbn].available =  this.dict[isbn].available+amount
        }
        else
            console.log("This book does not exist in the catalog")
    }

    //Borrow a book from the library
    borrow(isbn){
        //I added some validation to check if there's any copies available to be borrowed 
        if(this.dict[isbn].available > 0)
            this.dict[isbn].available = this.dict[isbn].available-1
        else
            console.log("This book is not available")
    }

    //Return a book to the library
    returnBook(isbn){
        //I check to see if anymore books can be returned 
        if(this.dict[isbn].copies > this.dict[isbn].available )
            this.dict[isbn].available = this.dict[isbn].available+1
        else
            console("No books to return")
    }

    //Check the stock 
    stock(){
        for(let x in this.dict){
            console.log('# '+x+', Copies: '+this.dict[x].copies+', Available: '+this.dict[x].available)
        }
    }
}

//This function populates the library with data from the catalog
function populateLibrary(catalog){
    var x = {}
    let data = fs.readFileSync(catalog)
    let books = data.toString().split('\n')

    for (let i=0; i<books.length; i++){
        let book = books[i].split(',')
        x[book[0]] = new Book(book[1], book[2], book[3], 0, 0)
    } 
    //console.log(x)
    return x
}



module.exports = Library