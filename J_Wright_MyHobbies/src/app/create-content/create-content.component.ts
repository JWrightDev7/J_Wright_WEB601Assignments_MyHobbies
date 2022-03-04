import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newHobbyEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newHobby?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  createHobby(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newHobby = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(", ")
    };
    this.newHobbyEvent.emit(this.newHobby);
  }

}
