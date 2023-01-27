import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4400/card.js',
            type: 'module',
            exposedModule: './Card',
          }).then((m) => m.CardModule),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            type: 'module',
            exposedModule: './Module',
          }).then((m) => m.WalletModule),
      },
    ],
  },
  {
    path: 'topWebMaster',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4500/remoteEntry.js',
        type: 'module',
        exposedModule: './Component',
      }).then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
