import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mon-premier-workspace-time-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})

export class TimeComponent implements AfterViewInit {

  today: number;

  constructor(){
    this.today = Date.now();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
