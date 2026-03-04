import { Injectable } from '@angular/core';
import { Lap } from '../models/lap.model';

@Injectable({
    providedIn: 'root'
})

export class LapService {
    private STORAGE_KEY = 'lapTimes';

    constructor(){}

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
}