import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMin'
})
export class ShowMinPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    return Math.min(...value);
  }

}
