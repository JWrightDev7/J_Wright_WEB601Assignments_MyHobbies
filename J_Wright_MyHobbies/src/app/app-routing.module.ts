import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbyDetailComponent } from './hobby-detail/hobby-detail.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list/:id',
    component: HobbyDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
