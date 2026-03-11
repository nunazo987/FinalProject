import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LapService } from '../core/services/lap.service';
import { Lap } from '../core/models/lap.model';
import { LapTimeFormatPipe } from '../pipes/lap-time-format-pipe';
import { KpiCard } from '../shared/kpi-card/kpi-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, LapTimeFormatPipe, KpiCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalLaps = 0;
  bestLap: Lap | undefined;
  averageLapTime: string | undefined;
  lastLap: Lap | undefined;

  constructor(private lapService: LapService){}

  ngOnInit(): void {
    this.totalLaps = this.lapService.getTotalLaps();
    this.bestLap = this.lapService.getBestLap();
    this.averageLapTime = this.lapService.getAverageLapTime();
    this.lastLap = this.lapService.getLastLap();
  }
}
