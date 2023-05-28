import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    AppendCLIPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
