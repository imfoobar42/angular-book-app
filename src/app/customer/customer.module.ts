import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.route';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations:[CustomerLoginComponent,CustomerRegistrationComponent],
    imports:[BrowserModule,RouterModule.forChild(customerRoutes), FormsModule ],
    exports:[CustomerLoginComponent,CustomerRegistrationComponent, RouterModule]
})

export class CustomerModule{

}