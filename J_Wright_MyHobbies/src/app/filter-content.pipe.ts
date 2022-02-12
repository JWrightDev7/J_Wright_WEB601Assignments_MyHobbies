import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentItems: Content[], htype?: string): Content[] {
    let filtered;
    if(!htype){
      filtered = contentItems.filter(item => item.type == "" || item.type == null);
    }else{
      filtered = contentItems.filter(item => item.type == htype);
    }

    return filtered;
  }

}
