import { Pipe, PipeTransform } from '@angular/core';
import { Hobbies } from './helper-files/Hobbies';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(hobbieItem: Hobbies[], htype?: string): Hobbies[] {
    let filtered;
    if(!htype){
      filtered = hobbieItem.filter(item => item.type == "" || item.type == null);
    }else{
      filtered = hobbieItem.filter(item => item.type == htype);
    }

    return filtered;
  }

}
