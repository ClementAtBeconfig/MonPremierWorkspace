import { InjectionToken } from "@angular/core";

export const MONINTERFACETOKEN = new InjectionToken<MonInterface>('MONINTERFACETOKEN');

export interface MonInterface{

    trifouille(premier:number, second:number):number;
}