import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lapTimeFormat',
})
export class LapTimeFormatPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const paddedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${paddedSeconds}`;
  }
}
