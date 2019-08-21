import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prop'
})
export class PropPipe implements PipeTransform {

  transform(value: any, cat: any): any {
    const res = value.filter(t => t.category === cat);
    return res;
  }

}
