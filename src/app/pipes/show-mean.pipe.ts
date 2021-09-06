import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMean'
})
export class ShowMeanPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    return value.reduce((a, b) => a + b) / value.length;
  }

}
