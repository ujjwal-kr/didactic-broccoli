import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TalkComponent } from './talk/talk.component';
import { VerifyComponent } from './verify/verify.component';
import { SelectComponent } from './select/select.component';
import { TalkComponent2 } from './talk2/talk.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'name/:id', component: VerifyComponent},
  {path: 'select', component: SelectComponent},
  {path: 'main1', component: TalkComponent},
  {path: 'main2', component: TalkComponent2},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
