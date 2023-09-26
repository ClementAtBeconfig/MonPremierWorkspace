import { Injectable } from "@angular/core";
import { MonInterface } from "./mon-interface";


@Injectable({
    providedIn: 'root'
  })
export class MonImplementationUn implements MonInterface{
    
    trifouille(premier: number, second: number): number {
        return premier+second;
    }

}