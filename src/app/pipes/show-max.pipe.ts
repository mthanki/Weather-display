import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMax'
})
export class ShowMaxPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    return Math.max(...value);
  }

}
