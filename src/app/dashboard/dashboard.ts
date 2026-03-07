import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LapService } from '../core/services/lap.service';
import { Lap } from '../core/models/lap.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalLaps: number = 0;
  bestLap: Lap | undefined;
  averageLapTime: number | undefined;
  lastLap: Lap | undefined;

  constructor(private lapService: LapService){}

  ngOnInit(): void {
    this.totalLaps = this.lapService.getTotalLaps();
    this.bestLap = this.lapService.getBestLap();
    this.averageLapTime = this.lapService.getAverageLapTime();
    this.lastLap = this.lapService.getLastLap();
  }
}
