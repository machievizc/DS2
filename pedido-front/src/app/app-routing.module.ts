import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeComponent } from './cidade/cidade.component';

const routes: Routes = [
  {
    path: 'cidades',
    component: CidadeComponent,
  },
  {
    path: '',
    redirectTo: 'cidades',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
