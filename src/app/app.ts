import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finalProject');
}

async function loadUsers() {
  const response = await fetch(environment.apiUrl + '/users');
  const users = await response.json();

  console.log(users);
}

loadUsers();
