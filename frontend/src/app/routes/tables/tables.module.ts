import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TableRoutingModule } from './tables-routing.module';

import { TablesRemoteDataComponent } from './remote-data/remote-data.component';
import { RemoteDataEditComponent } from './remote-data/edit/edit.component';


const COMPONENTS: any[] = [TablesRemoteDataComponent];
const COMPONENTS_DYNAMIC: any[] = [RemoteDataEditComponent];

@NgModule({
  imports: [SharedModule, TableRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class TablesModule {}
