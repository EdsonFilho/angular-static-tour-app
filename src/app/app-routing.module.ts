import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatacombsComponent } from './catacombs/catacombs.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catacombs', component: CatacombsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
