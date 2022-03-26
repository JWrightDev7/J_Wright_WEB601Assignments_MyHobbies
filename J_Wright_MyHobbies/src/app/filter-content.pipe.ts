import { Pipe, PipeTransform } from '@angular/core';
import { Hobby } from '../helper-files/Hobby';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(hobbieItem: Hobby[], htype?: string): Hobby[] {
    let filtered;
    if(!htype){
      filtered = hobbieItem.filter(item => item.type == "" || item.type == null);
    }else{
      filtered = hobbieItem.filter(item => item.type == htype);
    }

    return filtered;
  }

}
