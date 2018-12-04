import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare interface traffic {
  Id: number;
  Protocol: string;
  Time: string;
  DataType: string;
  Size: string;
  Route: string;
  IpFrom: string;
  IpTo: string;
  PassSTT: string;
  PortFrom: number;
  PortTo: number;
  Alert: string;
}

export const ROUTES: traffic[] = [
  { Id: 1, Protocol: 'HTTP', Time: '04/12/2018 16:00:00', DataType: 'DataType', Size: '5KB', Route: 'R1', IpFrom: '192.168.1.10', IpTo: '192.168.1.100', PassSTT: 'Running', PortFrom: 22, PortTo: 23, Alert: 'AM1' },
  { Id: 2, Protocol: 'HTTP', Time: '04/12/2018 16:00:00', DataType: 'DataType', Size: '5KB', Route: 'R1', IpFrom: '192.168.1.10', IpTo: '192.168.1.100', PassSTT: 'Running', PortFrom: 22, PortTo: 23, Alert: 'AM1' },
  { Id: 3, Protocol: 'HTTP', Time: '04/12/2018 16:00:00', DataType: 'DataType', Size: '5KB', Route: 'R1', IpFrom: '192.168.1.10', IpTo: '192.168.1.100', PassSTT: 'Running', PortFrom: 22, PortTo: 23, Alert: 'AM1' },
  { Id: 4, Protocol: 'HTTP', Time: '04/12/2018 16:00:00', DataType: 'DataType', Size: '5KB', Route: 'R1', IpFrom: '192.168.1.10', IpTo: '192.168.1.100', PassSTT: 'Running', PortFrom: 22, PortTo: 23, Alert: 'AM1' },
  { Id: 5, Protocol: 'HTTP', Time: '04/12/2018 16:00:00', DataType: 'DataType', Size: '5KB', Route: 'R1', IpFrom: '192.168.1.10', IpTo: '192.168.1.100', PassSTT: 'Running', PortFrom: 22, PortTo: 23, Alert: 'AM1' }
];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  itemresults: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemresults = ROUTES.filter(itemresult => itemresult);
  }

}
