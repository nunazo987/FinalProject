import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LapList } from './lap-list/lap-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LapList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finalProject');
}
