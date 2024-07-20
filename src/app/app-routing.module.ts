import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { ServiceComponent } from './service/service.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'story',
    component:StoryComponent
  },
  {
    path:'service',
    component:ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
