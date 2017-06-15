import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DirectoryComponent } from './directory/directory.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'directory/:ninja', component: DirectoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
