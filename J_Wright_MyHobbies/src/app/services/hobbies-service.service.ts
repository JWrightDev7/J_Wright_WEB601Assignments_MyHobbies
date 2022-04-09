import { Injectable } from '@angular/core';
import { HOBBIESLIST } from '../../helper-files/hobbieDb';
import { Hobby } from "../../helper-files/Hobby";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) { }
  getHobbies(): Observable<Hobby[]> {
    console.log('Loading Content...');
    return this.http.get<Hobby[]>("api/hobbyList");
  }

  addHobby(newContentItem: Hobby): Observable<Hobby> {
    console.log("Adding new Content...");
    this.messageService.add(`A new Hobby has been added.`);
    return this.http.post<Hobby>("api/hobbyList", newContentItem, this.httpOptions);
  }

  updateHobby(contentItem: Hobby): Observable<any> {
    return this.http.put("api/hobbyList", contentItem, this.httpOptions);
  }

  getSingleHobby(id: number): Observable<Hobby[]> {
    let hobby = HOBBIESLIST.filter(hobby => hobby.id == id);
    this.messageService.add(`Content Item at id: ${id} has been loaded.`);
    return of(hobby);
  }

  getHobby(id: number): Observable<Hobby> {
    return this.http.get<Hobby>("api/hobbyList/" + id);
  }
}
