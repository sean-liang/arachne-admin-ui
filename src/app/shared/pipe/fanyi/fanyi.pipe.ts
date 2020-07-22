import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'fanyi',
})
export class FanyiPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: any, prefix?: any): any {
    const k = `${prefix}.${value}`;
    let v = this.translate.instant(k);
    v = k === v ? this.translate.instant(`dict.${k}`) : v;
    return k === v ? value : v;
  }
}
