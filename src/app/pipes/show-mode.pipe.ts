import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMode'
})
export class ShowModePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    // return null;
    const mode = value.reduce(
      (a, b, i, arr) =>
        (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
      null);

    return mode;
  }

}
