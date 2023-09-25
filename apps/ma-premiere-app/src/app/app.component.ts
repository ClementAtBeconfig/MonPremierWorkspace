import { Component } from '@angular/core';
import { VersionPartComponent } from 'libs/ma-premiere-lib/src/lib/version/version.part';
import { LoginComponent } from 'libs/ma-premiere-lib/src/lib/login/login.component';
import { RouterOutlet } from '@angular/router';
import { TimeComponent } from 'libs/ma-premiere-lib/src/lib/time/time.component';

@Component({
  standalone: true,
  imports: [  VersionPartComponent , LoginComponent, RouterOutlet  ,  TimeComponent ],
  selector: 'mon-premier-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ma-premiere-app';

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



