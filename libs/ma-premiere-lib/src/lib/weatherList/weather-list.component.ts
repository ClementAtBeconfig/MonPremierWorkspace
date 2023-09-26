import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
@Component({
  standalone:true,
  selector: 'mon-premier-workspace-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  imports:[TableModule , ]
})
export class WeatherListComponent   {

}