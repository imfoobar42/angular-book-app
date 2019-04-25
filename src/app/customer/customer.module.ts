import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';


@NgModule({
    declarations:[CustomerLoginComponent,CustomerRegistrationComponent],
    imports:[BrowserModule],
    exports:[CustomerLoginComponent,CustomerRegistrationComponent]
})

export class CustomerModule{

}