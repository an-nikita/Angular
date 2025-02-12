import { Component } from '@angular/core';

import { SecondComponent } from './second/second.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThirdComponent } from './third/third.component';
import { FirstComponent} from './first/first.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FirstComponent,ReactiveFormsModule,FormsModule,CommonModule,SecondComponent,ThirdComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
