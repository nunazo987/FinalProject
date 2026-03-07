import { Component, OnInit } from '@angular/core';
import { LapService } from '../core/services/lap.service'
import { Lap } from '../core/models/lap.model'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LapTimeFormatPipe } from '../pipes/lap-time-format-pipe';

@Component({
  selector: 'app-lap-list',
  imports: [CommonModule, LapTimeFormatPipe],
  templateUrl: './lap-list.html',
  styleUrls: ['./lap-list.css'],
})
export class LapList implements OnInit {

  laps: Lap[] = [];
  filteredLaps: Lap[] = [];
  bestLapTime: number | undefined;

  constructor(private lapService: LapService, private router: Router) {}

  ngOnInit(): void {
    this.laps = this.lapService.getAll()
    this.filteredLaps = [...this.laps];
    this.bestLapTime = this.lapService.getBestLap()?.lapTime;
  }

  filterByDriver(driver: string): void {
    this.filteredLaps = this.laps.filter(lap => lap.driver.toLowerCase().includes(driver.toLowerCase()));
  }

  sortByLapTime(){
    this.filteredLaps.sort((a, b) => a.lapTime - b.lapTime);
  }

  goToDetail(id: string): void {
    this.router.navigate(['/laps', id]);
  }

  deleteLap(event: Event, id: string): void {
    event.stopPropagation();
    this.lapService.delete(id);
    this.laps = this.lapService.getAll();
    this.filteredLaps = [...this.laps];
  }
}
