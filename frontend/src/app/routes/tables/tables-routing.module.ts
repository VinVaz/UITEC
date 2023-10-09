import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesRemoteDataComponent } from './remote-data/remote-data.component';

const routes: Routes = [
  { path: 'remote-data', component: TablesRemoteDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
