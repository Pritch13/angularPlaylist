import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'directory', component: DirectoryComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}