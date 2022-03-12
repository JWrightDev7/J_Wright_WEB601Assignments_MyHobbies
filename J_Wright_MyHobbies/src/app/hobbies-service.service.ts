import { Injectable } from '@angular/core';
import { HOBBIESLIST } from './helper-files/hobbieDb';
import { Observable, of } from 'rxjs';
import {Hobbies} from "./helper-files/Hobbies";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private messageService: MessageService) {

  }

  getHobbiesObs(): Observable<Hobbies[]> {
    this.messageService.add('Content Array Loaded!');
    return of(HOBBIESLIST);
  }

  getSingleHobbie(id: number):Observable<Hobbies[]>{
    let hobbie = HOBBIESLIST.filter(hobbie => hobbie.id == id);
    this.messageService.add(`Content Item at id: ${id} has been loaded.`);
    return of(hobbie);
  }
}
