import { Component, Input, OnInit } from '@angular/core';
import { Hobbies } from './helper-files/Hobbies';
import { HobbiesService } from './hobbies-service.service';
import {MessageService} from "./message.service";
import {hobbiesList} from "./helper-files/hobbies-list";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "James' Hobbies";
  hobbiesList: Hobbies[];
  filteredHobbie: Hobbies[];

  constructor(private hobbiesService: HobbiesService, public messageService: MessageService) {
    this.hobbiesList = [];
    this.filteredHobbie = [];
  }

  ngOnInit(): void {
    this.hobbiesService.getHobbiesObs().subscribe(hobbieArray => this.hobbiesList = hobbieArray);
    this.getAHobbie("3");
  }

  searched(cardTitle: string, contentLst: Hobbies[]): string {
    for (let content of contentLst) {
      if (cardTitle == content.title) {
        return "There is a card with that title.";
      }
    }
    return "There is no card with that title.";
  }

  getAHobbie(id: string){
    let newId = parseInt(id);
    if(isNaN(newId)){
      return this.messageService.add(`You can't input a letter. You must enter a number between 0 - ${this.hobbiesList.length - 1}`);
    }
    if(newId < 0 || newId > this.hobbiesList.length - 1){
      return this.messageService.add(`You must enter a number between 0 - ${this.hobbiesList.length - 1}`);
    }else{
      this.messageService.clear();
      this.messageService.add(`Content Item at id: ${id} has been loaded.`);
      return this.hobbiesService.getSingleHobbie(newId).subscribe(singleHobbie => this.filteredHobbie = singleHobbie);
    }


  }

}
