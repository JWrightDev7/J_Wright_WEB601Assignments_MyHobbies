import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HobbiesService } from '../services/hobbies-service.service';
import {Hobby} from "../../helper-files/Hobby";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content-component.html',
  styleUrls: ['./modify-content-component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newHobbyEvent: EventEmitter<Hobby> = new EventEmitter<Hobby>();
  @Output() updateHobbyEvent: EventEmitter<Hobby> = new EventEmitter<Hobby>();
  hobby?: Hobby;

  constructor(private hobbiesService: HobbiesService) { }

  ngOnInit(): void {
  }

  addHobby(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string){

    this.hobby = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(',')
    }
    this.newHobbyEvent.emit(this.hobby);
  }

  updateHobby(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string){
    this.hobby = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(',')
    }
    this.updateHobbyEvent.emit(this.hobby);
  }

}
