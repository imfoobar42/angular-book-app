import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser"
import { BookModule } from './book/book.module';
import { CustomerLoginComponent } from './customer/customer-login.component';
import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations:[
    AppComponent
  ],
  providers:[

  ],
  bootstrap:[
    AppComponent
  ],  
  imports:[
    BrowserModule,
    BookModule,
    CustomerModule
  ]
})

export class AppModule{

}