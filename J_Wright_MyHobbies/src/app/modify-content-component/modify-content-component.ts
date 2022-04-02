import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { HobbiesService } from '../services/hobbies-service.service';
import { Hobby } from "../../helper-files/Hobby";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content-component.html',
  styleUrls: ['./modify-content-component.scss']
})

export class ModifyContentComponent implements OnInit {
  @Output() newHobbyEvent: EventEmitter<Hobby> = new EventEmitter<Hobby>();
  @Output() updateHobbyEvent: EventEmitter<Hobby> = new EventEmitter<Hobby>();
  hobby?: Hobby;
  constructor(public dialog: MatDialog) { }
  data: any;
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyContent, {
      width: '550px',
      height: '575px',
      data: {}
    });

    dialogRef.componentInstance.closed.subscribe(data => {
      this.addNewHobby(data);
    });

  }

  addNewHobby(data: Hobby) {
    console.log(data);
    this.hobby = {
      title: data.title,
      description: data.description,
      creator: data.creator,
      imgURL: data.imgURL,
      type: data.type,
      tags: data.tags
    }

    this.newHobbyEvent.emit(this.hobby);
  }

  updateHobby(data: Hobby) {
    this.hobby = {
      title: data.title,
      description: data.description,
      creator: data.creator,
      imgURL: data.imgURL,
      type: data.type,
      tags: data.tags
    }
    this.updateHobbyEvent.emit(this.hobby);
  }
}

@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.html',
  styleUrls: ['./modify-content-component.scss']
})
export class ModifyContent {
  closed = new EventEmitter();
  hobby?: Hobby;
  constructor(public dialogRef: MatDialogRef<ModifyContent>, @Inject(MAT_DIALOG_DATA) public data: Hobby) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newHobby(title: string, desc: string, creator: string, imgurl: string, type: string, tags: string) {
    this.hobby = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: imgurl,
      type: type,
      tags: tags.split(",")
    }

    this.dialogRef.close(this.hobby);
    this.dialogRef.afterClosed().subscribe(data => {
      this.data = data;
      this.closed.emit(this.data);
      console.log(this.data);
    });
  }

}

