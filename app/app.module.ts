﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddDetailsComponent } from './app.addDetails';
import {FormsModule} from '@angular/forms'

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddDetailsComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }