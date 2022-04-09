import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hobby } from '../../helper-files/Hobby';
import { HobbiesService } from '../services/hobbies-service.service';

@Component({
  selector: 'app-hobby-detail',
  templateUrl: './hobby-detail.component.html',
  styleUrls: ['./hobby-detail.component.scss']
})
export class HobbyDetailComponent implements OnInit {

  id?: number;
  hobby?: Hobby;

  constructor(private route: ActivatedRoute, private hobbiesService: HobbiesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0");
      this.hobbiesService.getHobby(this.id).subscribe(
        (c) => {
          this.hobby = c;
        });
    });
  }

  clicked() {
    if (this.hobby != null) {
      console.log(`Title: '${this.hobby.title}' \nId: '${this.hobby.id}'`);
    }
  }

}
