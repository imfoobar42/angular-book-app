import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';


@NgModule({
    declarations:[BookListComponent,BookDetailsComponent],
    imports:[BrowserModule],
    exports:[BookListComponent,BookDetailsComponent]
})
export class BookModule{

}