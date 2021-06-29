import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multifilter'
})
export class MultifilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(`value : ${value}`)
    console.log(`args : ${args}`)
    return null;
  }

}
