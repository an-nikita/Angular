import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';

import { ThirdComponent } from './third/third.component';
import { FirstComponent} from './first/first.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,ReactiveFormsModule,FormsModule,CommonModule,SecondComponent,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
