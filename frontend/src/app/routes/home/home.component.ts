import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';

import { HomeService } from './home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeService],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();
  notifySubscription!: Subscription;

  constructor(
    private dashboardSrv: HomeService,
    private settings: SettingsService
  ) {}

  ngOnInit() {
    this.notifySubscription = this.settings.notify.subscribe(res => {
      console.log(res);
    });
  }


  ngOnDestroy() {
    this.notifySubscription.unsubscribe();
  }

}
