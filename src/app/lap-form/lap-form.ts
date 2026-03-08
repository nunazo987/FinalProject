import { Component, OnInit } from '@angular/core';
import { LapService } from '../core/services/lap.service'
import { Lap } from '../core/models/lap.model'
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lap-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './lap-form.html',
  styleUrl: './lap-form.css',
})
export class LapForm implements OnInit{
  isEditMode: boolean = false;
  editId: string | null = null;

  pilots = [
  { name: 'Max Verstappen', team: 'Red Bull Racing' },
  { name: 'Isack Hadjar', team: 'Red Bull Racing' },
  { name: 'Lewis Hamilton', team: 'Ferrari' },
  { name: 'Charles Leclerc', team: 'Ferrari' },
  { name: 'George Russell', team: 'Mercedes' },
  { name: 'Kimi Antonelli', team: 'Mercedes' },
  { name: 'Lando Norris', team: 'McLaren' },
  { name: 'Oscar Piastri', team: 'McLaren' },
  { name: 'Fernando Alonso', team: 'Aston Martin' },
  { name: 'Lance Stroll', team: 'Aston Martin' },
  { name: 'Pierre Gasly', team: 'Alpine' },
  { name: 'Franco Colapinto', team: 'Alpine' },
  { name: 'Oliver Bearman', team: 'Haas' },
  { name: 'Esteban Ocon', team: 'Haas' },
  { name: 'Nico Hulkenberg', team: 'Audi' },
  { name: 'Gabriel Bortoleto', team: 'Audi' },
  { name: 'Liam Lawson', team: 'Racing Bulls' },
  { name: 'Arvid Lindblad', team: 'Racing Bulls' },
  { name: 'Carlos Sainz', team: 'Williams' },
  { name: 'Alex Albon', team: 'Williams' },
  { name: 'Sergio Perez', team: 'Cadillac' },
  { name: 'Valtteri Bottas', team: 'Cadillac' },
];

circuits = ['Bahrain', 'Barcelona'];

  newLapForm = new FormGroup({
    driver: new FormControl<string>("", [Validators.required]),
    team: new FormControl({value: "", disabled: true}),
    circuit: new FormControl("", [Validators.required]),
    lapTime: new FormControl<number | null>(null, [Validators.required, 
      Validators.min(1), Validators.pattern('^[0-9]+$')]),
    date: new FormControl("", [Validators.required]),
  })

  constructor (private lapService: LapService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.editId = this.route.snapshot.paramMap.get('id');
    if (this.editId){
      this.isEditMode = true;
      const lap = this.lapService.getById(this.editId);
      if (lap) {
        this.newLapForm.setValue({
          driver: lap.driver,
          team: lap.team,
          circuit: lap.circuit,
          lapTime: lap.lapTime,
          date: lap.date
        })
      }
    }
  }

  onDriverChange(driverName: string): void {
    const pilot = this.pilots.find(p => p.name === driverName);
    if (pilot) {
      this.newLapForm.patchValue({ team: pilot.team });
    }
  }

  addLap(): void {
    if (this.newLapForm.valid) {
      const formValues = this.newLapForm.value;
      if (this.isEditMode && this.editId) {
        const updatedLap: Lap = {
          id: this.editId,
          driver: formValues.driver!,
          team: this.newLapForm.get('team')?.value!,
          circuit: formValues.circuit!,
          lapTime: Number(formValues.lapTime),
          date: formValues.date!
        };
        this.lapService.update(updatedLap);
      } else {
        const newLap: Lap = {
          id: crypto.randomUUID(),
          driver: formValues.driver!,
          team: this.newLapForm.get('team')?.value!,
          circuit: formValues.circuit!,
          lapTime: Number(formValues.lapTime),
          date: formValues.date!
        };
        this.lapService.create(newLap);
      }
      this.newLapForm.reset();
      this.router.navigate(['/laps']);
    }
  }
}
