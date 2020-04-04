import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TalkComponent } from './talk/talk.component';
import { VerifyComponent } from './verify/verify.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: '/name', component: VerifyComponent},
  {path: '/select', component: SelectComponent},
  {path: '/main', component: TalkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
