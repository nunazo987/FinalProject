import { Component, OnInit } from '@angular/core';
import { LapService } from '../core/services/lap.service'
import { Lap } from '../core/models/lap.model'

@Component({
  selector: 'app-lap-list',
  imports: [],
  templateUrl: './lap-list.html',
  styleUrls: ['./lap-list.css'],
})
export class LapList implements OnInit {

  laps: Lap[] = [];
  filteredLaps: Lap[] = [];

  constructor(private lapService: LapService) {}

  ngOnInit(): void {
    this.laps = this.lapService.getAll()
    this.filteredLaps = [...this.laps];
  }

  filterByDriver(driver: string): void {
    this.filteredLaps = this.laps.filter(lap => lap.driver.includes(driver));
  }

  sortByLapTime(){
    this.filteredLaps.sort((a, b) => a.lapTime - b.lapTime);
  }
}
