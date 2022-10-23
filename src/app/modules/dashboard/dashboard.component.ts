import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['jmbg', 'first_name', 'last_name', 'email'];
  dataSource: any;
  req: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.req = this.dashboardService.getCandidatesList().subscribe(response => {
      this.dataSource = response;
    });
  }

  export() {
    this.dashboardService.exportCandidates().subscribe();
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
