import { Component } from '@angular/core';
import { VersionPartComponent } from 'libs/ma-premiere-lib/src/lib/version/version.part';

@Component({
  standalone: true,
  imports: [  VersionPartComponent ],
  selector: 'mon-premier-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ma-premiere-app';
  checked = false;

  darkModeSwitch(){

    document.documentElement.style.setProperty("--background", "black");
  //
  }
}



