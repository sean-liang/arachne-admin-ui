import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { DictItem, DICT_DATA } from '../../shared/data/dict-data';
import { I18NService } from '..//i18n/i18n.service';

export class I18NDictItem extends DictItem {
  i18nText: string;

  static from(item: DictItem, i18nText: string): I18NDictItem {
    const i = Object.assign(new I18NDictItem(), item);
    i.i18nText = i18nText;
    return i;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private index: { string: DictItem } = ({} as any) as { string: DictItem };
  private data: { string: DictItem[] } = ({} as any) as { string: DictItem[] };

  constructor(private translate: TranslateService, private i18n: I18NService) {
    for (const k in DICT_DATA) {
      if (DICT_DATA.hasOwnProperty(k)) {
        const value = DICT_DATA[k];
        const items = value.map((val) => {
          const item: DictItem = new DictItem();
          if (typeof val === 'string') {
            item.key = val;
          } else {
            item.key = val.key;
            item.color = val.color;
          }
          item.prefix = k;
          this.index[item.fullKey] = item;
          return item;
        });
        this.data[k] = items;
      }
    }
  }

  getItem(key: string): I18NDictItem {
    const item = this.index[key];
    return item ? I18NDictItem.from(item, this.i18n.fanyi(item.i18nKey)) : null;
  }

  getItems(prefix: string): I18NDictItem[] {
    return this.data[prefix] ? this.data[prefix].map((item) => this.getItem(item.fullKey)) : [];
  }

  getItemsAsTag(prefix: string, defaultColor: string = 'green'): any {
    const tags = {};
    this.getItems(prefix).map((item) => {
      tags[item.key] = {
        text: item.i18nText,
        color: item.color ? item.color : defaultColor,
      };
    });
    return tags;
  }

  getItemsAsLabeledEnum(prefix: string): any {
    return this.getItems(prefix).map((item) => {
      return { label: item.i18nText, value: item.key };
    });
  }

  getItemsAsTitleEnum(prefix: string): any {
    return this.getItems(prefix).map((item) => {
      return { title: item.i18nText, value: item.key };
    });
  }
}
