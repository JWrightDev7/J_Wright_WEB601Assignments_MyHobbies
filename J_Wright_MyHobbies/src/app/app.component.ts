import { Component, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "James' Hobbies";
  contentList: Content[];

  constructor(){
    this.contentList = [
      {
        id: 0,
        title: 'Fishing',
        description: 'Bass fishing is a specific type of sport fishing',
        creator: 'N/A',
        imgURL: 'https://media.istockphoto.com/photos/smallmouth-bass-1446-picture-id598088694?k=20&m=598088694&s=612x612&w=0&h=YWkwSOe181GTDIBLPmGFfj3zeaEzkfrHZA-L_dMZkCI=',
        type: 'Outdoor',
        tags: ['sport', 'hobby']
      },
      {
        id: 1,
        title: 'Baseball',
        description: 'Playing competitive and casual baseball',
        creator: 'Abner Doubleday',
        imgURL: 'https://media.istockphoto.com/photos/baseball-in-the-infield-picture-id482805043?b=1&k=20&m=482805043&s=170667a&w=0&h=rhZvkhxu191ZnwbAC38CT-FcPllctGlMl6lK2Ry-5Ng=',
        type: 'Outdoor',
        tags: ['sport', 'hobby']
      },
      {
        id: 2,
        title: "Gaming",
        description: "Escape From Tarkov is a first person shooter video game set in a post apocolyptic russia.",
        creator: "Battlestate Games",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/2/20/Escape_from_Tarkov.jpg",
        tags: ['past time', 'hobby']
      },
      {
        id: 3,
        title: 'Coding',
        description: 'Creating different things using code, such as my current discord bot written in python',
        creator: 'James Wright',
        imgURL: '../../assets/images/botCode.png',
        type: 'Indoor',
        tags: ['learning', 'hobby']
      },
      {
        id: 4,
        title: 'Tinkering',
        description: 'Messing around with different technology like Raspberry Pis and servers',
        creator: 'N/A',
        imgURL: 'https://images.unsplash.com/photo-1553406830-f6e44ac97624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        type: 'Indoor'
      },
      {
        id: 5,
        title: 'Boating',
        description: 'Going out on the boat, driving around. Sometimes done after fishing.',
        creator: 'N/A',
        imgURL: 'https://media.istockphoto.com/photos/bass-fisherman-on-lake-at-dawn-picture-id471736653?b=1&k=20&m=471736653&s=170667a&w=0&h=bx4z9gdN-MQvI1xZap4q_WMpspXYagOtjmVY3M1raMo=',
        type: 'Outdoor'
      },
      {
        id: 6,
        title: 'Kayaking',
        description: 'Normally Kayaking is done while fishing but sometimes it is nice to just kayak around looking at nature.',
        creator: 'N/A',
        imgURL: 'https://images.unsplash.com/photo-1566014727721-c2f1effe7220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2F5YWtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        type: 'Outdoor'
      }
    ]
  }

  searched(cardTitle: string, contentLst: Content[]): string{
    for(let content of contentLst){
      if(cardTitle == content.title){
        return "There is a card with that title.";
      }
    }
    return "There is no card with that title.";
  }
  
}
