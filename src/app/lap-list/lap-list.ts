import { Component } from '@angular/core';
import { LapService } from '../core/services/lap.service'
import { Lap } from '../core/models/lap.model'

@Component({
  selector: 'app-lap-list',
  imports: [],
  templateUrl: './lap-list.html',
  styleUrl: './lap-list.css',
})
export class LapList {

  laps: Lap[] = [];

  constructor(private lapService: LapService) {}

  ngOnInit(): void {
    this.laps = this.lapService.getAll()
  }
}
