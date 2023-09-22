import { Component, Input } from '@angular/core';
@Component({
  standalone:true,
  selector: 'mon-premier-workspace-version',
  templateUrl: './version.part.html',
  styleUrls: ['./version.part.scss'],
})
export class VersionPartComponent {
  private _serverVersion="0.0.0.0";
  private _clientVersion="0.0.0.0";
  private _version ="0.0.0.0";
  @Input()
  public get serverVersion(){
    return this._serverVersion;
    
  }
  public set serverVersion(value){
    this._serverVersion=value;
    this.VerifVersion()
  }
  @Input()
  public get clientVersion(){
    return this._clientVersion;
  }
  public set clientVersion(value){
    this._clientVersion=value;
    this.VerifVersion()
  }
  public set version(value){
    this._version=value;
  }
  public get version(){
    return this._version;
  }
  VerifVersion(){
    if(this.clientVersion == this.serverVersion){
      this.version="Version "+this.clientVersion
    }
    else{
      this.version="Version Client "+this.clientVersion+" / Version Server "+this.serverVersion;
    }
  }

}
