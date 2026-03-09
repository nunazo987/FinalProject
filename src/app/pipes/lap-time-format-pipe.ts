import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lapTimeFormat',
})
export class LapTimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    const [minutes, seconds] = value.split(':');
    return `${minutes}m:${seconds}s`;
  }
}
