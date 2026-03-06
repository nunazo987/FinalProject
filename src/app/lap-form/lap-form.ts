import { Component } from '@angular/core';
import { LapService } from '../core/services/lap.service'
import { Lap } from '../core/models/lap.model'
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lap-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './lap-form.html',
  styleUrl: './lap-form.css',
})
export class LapForm {

  newLapForm = new FormGroup({
    driver: new FormControl<string>("", [Validators.required,
      Validators.minLength(2), 
      Validators.pattern('^[a-zA-Z ]+$')
    ]),
    team: new FormControl("", [Validators.required]),
    circuit: new FormControl("", [Validators.required]),
    lapTime: new FormControl<number | null>(null, [Validators.required, 
      Validators.min(1)]),
    date: new FormControl("", [Validators.required]),
  })

  constructor (private lapService: LapService, private router: Router){}

  addLap(){
    const formValues = this.newLapForm.value;

    if(this.newLapForm.valid){
    const newLap: Lap = {
      id: crypto.randomUUID(),
      driver: formValues.driver!,
      team: formValues.team!,
      circuit: formValues.circuit!, 
      lapTime: Number(formValues.lapTime),
      date: new Date(formValues.date!)
    }
    this.lapService.create(newLap);
    this.newLapForm.reset();
    this.router.navigate(['/laps']);
  }
  }
}
