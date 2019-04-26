import { Component } from '@angular/core';



@Component({
    // selector:"book-details",
    templateUrl:"./book-details.component.html"
})
export class BookDetailsComponent{
book={  	
    "bookId": 101,
    "imageUrl": "assets/images/java8_in_action.jpeg",
    "title": "Java 8 in Action",
    "authors": [
          {"firstName": "Raoul-Gabriel", "lastName": "Urma"},
          {"firstName": "Mario", "lastName": "Fusco"},
          {"firstName": "Alan", "lastName": "Mycroft"}
     ],
     "category": "programming",
     "publisher": "Wiley",
     "noOfPages": 424, 
     "rating": 4.4,
     "edition": 2,
     "price": 618,
     "releaseDate": new Date(2018,5,23)
}
}