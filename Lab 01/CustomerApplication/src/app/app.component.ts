// A component is the binding layer between the UI and the model

import { Component } from '@angular/core'; // Required to use the decorator in line 5

@Component({ // This is called a decorator - this is actually where the defined component is binded to the UI (the HTML file)
  // Has the following three properties:
  selector: 'app-root',
  templateUrl: './app.component.html', // Bind to HTML file
  styleUrls: ['./app.component.css'] // Bind to CSS file
})

export class AppComponent { // Component is defined using a class
  title = 'CustomerApplication'; // This variable is consumed in the UI (see app.component.html)
} // Notice the class is exported - this is required in order to import it into a module
