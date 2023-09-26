import { Component, Inject } from '@angular/core';
import { VersionPartComponent } from 'libs/ma-premiere-lib/src/lib/version/version.part';
import { LoginComponent } from 'libs/ma-premiere-lib/src/lib/login/login.component';
import { RouterOutlet } from '@angular/router';
import { TimeComponent } from 'libs/ma-premiere-lib/src/lib/time/time.component';

import { MONINTERFACETOKEN, MonInterface } from '../models/mon-interface';
import { HttpClient } from '@angular/common/http';
import { WeatherListComponent } from 'libs/ma-premiere-lib/src/lib/weatherList/weather-list.component';
import { Weather } from '../models/weather';

@Component({
  standalone: true,
  imports: [  VersionPartComponent , LoginComponent, RouterOutlet  ,  TimeComponent , WeatherListComponent ],
  selector: 'mon-premier-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ma-premiere-app';


  constructor(
    @Inject(MONINTERFACETOKEN) classe1:MonInterface,
    httpClient:HttpClient    
  ){

    console.log(classe1.trifouille(1,2));

    
    // const monInstantceDeMonImplementationUn = new MonImplementationUn();
    // console.log(monInstantceDeMonImplementationUn.trifouille(1,2));

    // const monInstantceDeMonImplementationDeux = new MonImplementationDeux();
    // console.log(monInstantceDeMonImplementationDeux.trifouille(1,2));

  }

  darkModeSwitch(){
    
    
    const darkModeSwitch = document.getElementById('SwitchDarkMode') as HTMLInputElement ;
    if(darkModeSwitch.checked)
    {
      document.documentElement.style.setProperty("--background", "black");
      document.documentElement.style.setProperty("--fontColor", "white");
    }
    else{
      document.documentElement.style.setProperty("--background", "white");
      document.documentElement.style.setProperty("--fontColor", "black");
    }
   
  }
}



