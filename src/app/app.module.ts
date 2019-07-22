import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestListComponent } from './TestSuite/test-list.component';
import { TestService } from "./TestSuite/test.service";
import { PagerService } from "./TestSuite/pager.Service";
import {SearchByNamePipe} from './TestSuite/search-by-name.pipe'
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule,MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [TestService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
