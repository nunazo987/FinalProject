import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { environment } from '../environments/environment.development';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finalProject');

  router = inject(Router);
}

async function loadUsers() {
  const response = await fetch(environment.apiUrl + '/users');
  const users = await response.json();

  console.log(users);
}

loadUsers();

async function createUser(){
  const user = { id: "4", username: "ana", password: "5678" };
  
  const response = await fetch(environment.apiUrl + '/users', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});

const data = await response.json();
console.log(data);
}

createUser();