// Certain components belong to a module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Required in order to use decorator for modules
// The above two import statements are actually importing angular default components

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Import the component first that is going to be included in this module

@NgModule({ // Decorator used for modules
  declarations: [ // This property specifies all components part of this module
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // This property indicates from which of the declared components (property 1) is the start up component
})
export class AppModule { } // Defining a module
// Notice how both component and modules are classes
