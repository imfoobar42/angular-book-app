import { Component } from '@angular/core';

@Component({
    selector:"book-list",
    templateUrl:"./book-list.component.html"
})
export class BookListComponent{
    books = [
        {
            "bookId": 101,
            "imageUrl": "assets/images/her_last_wish.jpeg",
            "title": "Her Last Wish",
            "price": 250,
            "rating": 3.2,
            "category": "Biographies"
        },
        {
            "bookId": 102,
            "imageUrl": "assets/images/lifes_amazing_secrets.jpeg",
            "title": "Lifes Amazing Secrets",
            "price": 300,
            "rating": 4,
            "category": "Biographies"
        },
        {
            "bookId": 103,
            "imageUrl": "assets/images/secret_of_nagas.jpeg",
            "title": "Secret of Nagas",
            "price": 400,
            "rating": 4.9,
            "category": "Biographies"
        }
    ];
}