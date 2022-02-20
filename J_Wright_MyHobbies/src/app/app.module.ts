import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentPipe } from './filter-content.pipe';
import { HoverAffectDirective } from './hover-affect.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    FilterContentPipe,
    HoverAffectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
