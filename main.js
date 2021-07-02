const Library = require('./Library');

var cork_city = new Library('./catalog.csv')

cork_city.lookup("9781472258229") 
cork_city.add("9781472258229")

cork_city.lookup("9780441569595") 
cork_city.add("9780441569595", 3)

cork_city.borrow("9781472258229") 
cork_city.borrow("9780441569595") 
cork_city.borrow("9780441569595")
cork_city.returnBook("9780441569595") 

cork_city.stock()





