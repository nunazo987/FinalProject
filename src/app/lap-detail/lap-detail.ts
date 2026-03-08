import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LapService } from '../core/services/lap.service';
import { Lap } from '../core/models/lap.model'; 
import { LapTimeFormatPipe } from '../pipes/lap-time-format-pipe';

@Component({
  selector: 'app-lap-detail',
  imports: [CommonModule, LapTimeFormatPipe],
  templateUrl: './lap-detail.html',
  styleUrl: './lap-detail.css',
})
export class LapDetail implements OnInit {
  lap: Lap | undefined;

  constructor(
    private route: ActivatedRoute,
    private lapService: LapService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.lap = this.lapService.getById(id);
    }
  }

  goBack(): void {
    this.router.navigate(['/laps']);
  }

  editLap(): void {
  this.router.navigate(['/laps/edit', this.lap?.id]);
}
}
