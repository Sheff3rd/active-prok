import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'serialize'
})
export class SerializePipe {
  transform(val) {
  return Array.isArray(val)
        ? val : [ val ];
  }
}
