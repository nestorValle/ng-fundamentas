import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../app-routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule, RouterModule]
})
export class AppRoutingModule { }
