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
  bestLapTime: string | undefined;

  constructor(private lapService: LapService, private router: Router) {}

  ngOnInit(): void {
    this.laps = this.lapService.getAll()
    this.filteredLaps = [...this.laps];
    this.bestLapTime = this.lapService.getBestLap()?.lapTime;
  }

  filterLaps(query: string): void {
    this.filteredLaps = this.laps.filter(lap => 
      lap.driver.toLowerCase().includes(query.toLowerCase()) ||
      lap.team.toLowerCase().includes(query.toLowerCase()) ||
      lap.circuit.toLowerCase().includes(query.toLowerCase())
    );
  }
  private toSeconds(lapTime: string): number {
  const [minutes, rest] = lapTime.split(':');
  return parseInt(minutes) * 60 + parseFloat(rest);
  }

  sortByLapTime(): void {
    this.filteredLaps.sort((a, b) => this.toSeconds(a.lapTime) - this.toSeconds(b.lapTime));
  }

  goToDetail(id: string): void {
    this.router.navigate(['/laps', id]);
  }

  deleteLap(event: Event, id: string): void {
    event.stopPropagation();
    this.lapService.delete(id);
    this.laps = this.lapService.getAll();
    this.filteredLaps = [...this.laps];
    this.bestLapTime = this.lapService.getBestLap()?.lapTime;
  }
}
