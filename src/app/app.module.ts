import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from './form/form.module';
import { EmployeeModule } from './employee/employee.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { GreetPipe } from './greet.pipe';
import { ItemService } from './item.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    imports: [ 
      BrowserModule,
      FormModule,
      EmployeeModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      AppComponent
    ],
    exports: [],
    declarations: [ 
      AppComponent,
      HighlightDirective,
      GreetPipe
    ],
    providers: [
      ItemService,
      DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
