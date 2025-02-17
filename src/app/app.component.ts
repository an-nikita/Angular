import { Component } from '@angular/core';

import { SecondComponent } from './second/second.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThirdComponent } from './third/third.component';
import { FirstComponent } from './first/first.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientComponent } from './client/client.component';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,FormsModule,CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
