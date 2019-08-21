import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniq'
})
export class UniqPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
