import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../../models/weather';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'mon-premier-workspace-home',
  standalone: true,
  imports: [CommonModule , ButtonModule , RouterModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  
  weathers:Weather[] = [];


  constructor(private weatherService:WeatherService){    

  }

  async ngOnInit(): Promise<void> {

    this.weathers =  await lastValueFrom(this.weatherService.getAll());
    
  }
}


