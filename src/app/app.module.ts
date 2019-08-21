import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { ManageComponent } from './pages/manage/manage.component';
import { PropPipe } from './pipes/prop.pipe';
import { UniqPipe } from './pipes/uniq.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShelfComponent,
    ManageComponent,
    PropPipe,
    UniqPipe
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
