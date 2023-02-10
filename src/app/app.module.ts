import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './FIrstComponent/firstComponent.component';
import { GeneratedComponentComponent } from './generated-component/generated-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GeneratedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
