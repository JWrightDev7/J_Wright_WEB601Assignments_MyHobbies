import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from '../helper-files/Hobby';
import { HobbiesService } from './services/hobbies-service.service';
import { LogUpdateService } from './services/log-update.service';
import { MessageService } from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "James' Hobby";

  constructor(private logService: LogUpdateService) { }

  ngOnInit(): void {
    this.logService.init();
  }

}
