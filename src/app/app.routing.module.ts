import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';
import {CComponent} from './components/c/c.component';
import {DComponent} from './components/d/d.component';


const routes: Routes = [
        
  { path: 'KomponenteA', component: AComponent},
  { path: 'KomponenteB', component: BComponent},
  { path: 'KomponenteC', component: CComponent},
  { path: 'KomponenteD', component: DComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},   
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
