import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from '../helper-files/Hobby';
import { HobbiesService } from './services/hobbies-service.service';
import { MessageService } from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "James' Hobby";
  hobbiesList: Hobby[] = [];
  filteredHobby: Hobby[] = [];

  constructor(private hobbiesService: HobbiesService, public messageService: MessageService) {}

  ngOnInit(): void {
    this.getHobbies();
  }

  getHobbies(): void{
    this.hobbiesService.getHobbies().subscribe(hobbiesArray => this.hobbiesList = hobbiesArray);
    this.hobbiesService.getSingleHobby(3).subscribe(singleHobby => this.filteredHobby = singleHobby);
  }

  addNewHobby(newHobbyFromChild: Hobby): void{
    this.hobbiesService.addHobby(newHobbyFromChild).subscribe(newHobbyFromServer => {
      console.log('New Hobby from the server', newHobbyFromServer);
      this.hobbiesList.push(newHobbyFromServer);
      this.hobbiesList = [...this.hobbiesList];
    });
  }

  updateHobby(contentItem: Hobby): void{
    this.hobbiesService.updateHobby(contentItem).subscribe(() => {
      console.log("Content has been updated");
      this.getHobbies();
    });
  }


  searched(cardTitle: string, contentLst: Hobby[]): string {
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
     return this.hobbiesService.getSingleHobby(newId).subscribe(singleHobby => this.filteredHobby = singleHobby);
    }
  }

}
