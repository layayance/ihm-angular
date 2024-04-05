import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'accueil', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule) },
  { path: 'formulaire', loadChildren: () => import('./formulaire/formulaire.module').then(m => m.FormulaireModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: '**', redirectTo: 'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
