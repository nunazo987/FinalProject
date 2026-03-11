import { Injectable } from '@angular/core';
import { Lap } from '../models/lap.model';

@Injectable({
    providedIn: 'root'
})

export class LapService {
    private STORAGE_KEY = 'lapTimes';

    private toSeconds(lapTime: string): number {
        const [minutes, rest] = lapTime.split(':');
        const seconds = parseFloat(rest);
        return parseInt(minutes) * 60 + seconds;
    }

    getAll(): Lap[]{
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data): [];
    }

    create(lap: Lap): void {
        const laps = this.getAll();
        laps.push(lap);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(laps));
    }

    getById(id: string): Lap | undefined{ 
        const laps = this.getAll();
        return laps.find(lap => lap.id === id);
    }

    update(updatedLap: Lap): void {
        const laps = this.getAll();
        const index = laps.findIndex(lap => lap.id === updatedLap.id)

        if (index !== -1){
            laps[index] = updatedLap;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(laps));
        }
    }

    delete(id: string): void {
        const laps = this.getAll();
        const filteredLaps = laps.filter(lap => lap.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredLaps));
    }

    getTotalLaps(): number{
        const laps = this.getAll();
        return laps.length
    }

    getBestLap(): Lap | undefined {
        const laps = this.getAll();

        if (laps.length === 0){
            return undefined;
        }

        return laps.reduce((best, current) => 
        this.toSeconds(current.lapTime) < this.toSeconds(best.lapTime) ? current : best
    );
    }

    getLastLap(): Lap | undefined {

        const laps = this.getAll();

        if (laps.length === 0) {
            return undefined;
        }

        return laps[laps.length - 1];
    }

    getAverageLapTime(): string | undefined {

        const laps = this.getAll();

        if (laps.length === 0) {
            return undefined;
        }

        const totalSeconds = laps.reduce((sum, lap) => sum + this.toSeconds(lap.lapTime), 0);
        const avg = totalSeconds / laps.length;
        const minutes = Math.floor(avg / 60);
        const seconds = (avg % 60).toFixed(3);
        return `${minutes}:${seconds.padStart(6, '0')}`;
    }
    
}