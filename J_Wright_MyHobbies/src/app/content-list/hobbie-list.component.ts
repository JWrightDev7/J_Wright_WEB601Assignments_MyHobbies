import { Component, Input, OnInit } from '@angular/core';
import { Hobbies } from '../helper-files/Hobbies';

@Component({
  selector: 'app-content-list',
  templateUrl: './hobbie-list.component.html',
  styleUrls: ['./hobbie-list.component.scss']
})
export class HobbieListComponent implements OnInit {
  @Input() hobbieItem: Hobbies;
  constructor() {
    this.hobbieItem = {
      id: 0,
      title: "",
      description: "",
      creator: "",
      imgURL: "",
      type: "",
      tags: []
    }
  }

  ngOnInit(): void {
  }

  clicked(){
    if(this.hobbieItem != null){
      console.log(`Title: '${this.hobbieItem.title}' \nId: '${this.hobbieItem.id}'`);
    }
  }
}
