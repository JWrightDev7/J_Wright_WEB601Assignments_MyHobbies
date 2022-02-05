import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from "../helper-files/content-list";


@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  hobbies: ContentList;

  constructor() {
    let bassFishing: Content;
    let EFT: Content;
    let baseball: Content;

    bassFishing = {
      id: 0,
      title: "Bass Fishing",
      description: "A sport where you target Largemouth and Smallmouth bass while fishing.",
      creator: "None",
      imgURL: "https://media.istockphoto.com/photos/smallmouth-bass-1446-picture-id598088694?k=20&m=598088694&s=612x612&w=0&h=YWkwSOe181GTDIBLPmGFfj3zeaEzkfrHZA-L_dMZkCI=",
      type: "Sport - Fishing"
    };

    EFT = {
      id: 1,
      title: "Escape From Tarkov",
      description: "Escape From Tarkov is a first person shooter video game set in a post apocolyptic russia.",
      creator: "Battlestate Games",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/2/20/Escape_from_Tarkov.jpg",
      type: "Video Game - First Person Shooter"
    };

    baseball = {
      id: 2,
      title: "Baseball",
      description: "I have enjoyed playing baseball since I was 4 years old, I played baseball for 16 years, winning a Provincial championship in the process.",
      creator: "Abner Doubleday",
      imgURL: "https://media.istockphoto.com/photos/baseball-in-the-infield-picture-id482805043?b=1&k=20&m=482805043&s=170667a&w=0&h=rhZvkhxu191ZnwbAC38CT-FcPllctGlMl6lK2Ry-5Ng=",
      type: "Sport - Baseball"
    }



    this.hobbies = new ContentList(bassFishing);
    this.hobbies.addItems(EFT);
    this.hobbies.addItems(baseball);
  }

  ngOnInit(): void {
  }

}
