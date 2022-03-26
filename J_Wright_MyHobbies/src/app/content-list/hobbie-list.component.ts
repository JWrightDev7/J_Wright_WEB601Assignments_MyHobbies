import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from '../../helper-files/Hobby';

@Component({
  selector: 'app-content-list',
  templateUrl: './hobbie-list.component.html',
  styleUrls: ['./hobbie-list.component.scss']
})
export class HobbieListComponent implements OnInit {
  @Input() hobbyItem: Hobby;
  constructor() {
    this.hobbyItem = {
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
    if(this.hobbyItem != null){
      console.log(`Title: '${this.hobbyItem.title}' \nId: '${this.hobbyItem.id}'`);
    }
  }
}
