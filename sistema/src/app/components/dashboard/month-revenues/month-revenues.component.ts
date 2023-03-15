import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-month-revenues',
  templateUrl: './month-revenues.component.html',
  styleUrls: ['./month-revenues.component.scss']
})
export class MonthRevenuesComponent implements OnInit{

  month!: string;

  constructor(private storeService: StoreService) {

  }

  ngOnInit() {
    this.getMonthCurrent();
  }

  getMonthCurrent() {
    let date = new Date();
    let dateString = date.toLocaleDateString('pt-br', {month: 'long'})
    let letterDateString = dateString[0].toUpperCase() + dateString.substring(1)
    this.month = letterDateString;
    this.storeService.setStoreMonth(this.month)
  }

}
