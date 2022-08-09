import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContacctBookComponent } from './contacct-book/contacct-book.component';
import { LookupCodesComponent } from './lookup-codes/lookup-codes.component';

@NgModule({
  declarations: [AppComponent, ContacctBookComponent, LookupCodesComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
