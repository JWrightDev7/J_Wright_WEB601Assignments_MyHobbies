import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hobby } from "../../helper-files/Hobby";
import { HOBBIESLIST } from "../../helper-files/hobbieDb";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const hobbyList: Hobby[] = HOBBIESLIST;
    return {hobbyList};
  }

  genId(hobbies: Hobby[]): number{
    return hobbies.length > 0 ?
    Math.max(...hobbies.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
