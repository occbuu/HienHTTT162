import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-line-detail',
    templateUrl: './line-detail.component.html',
    styleUrls: [
        './line-detail.component.scss',
    ],
    animations: [routerTransition()]
})
export class LineDetailComponent implements OnInit {
    modelfd: any = new Date(2018, 5, 4);
    modeltd: any = new Date(2018, 5, 20);
    isSearched = false;
   
    // Pie
     public pieChartLabels: string[] = [
        'Good Qty',
        'Major Error',
        'Minor Errors',
        'Bad Errors'
    ];
    public pieChartData: number[] = [300, 500, 100, 100];
    public pieChartType: string = 'pie';

    public pieChartData1: number[] = [500, 50, 10, 10];
    public pieChartType1: string = 'pie';

    public pieChartData2: number[] = [800, 500, 100, 100];
    public pieChartType2: string = 'pie';

    constructor() {}

    ngOnInit() {}

    search()
    {
        if(this.isSearched)
            this.isSearched = false;
            else
            this.isSearched = true;
    }
}
