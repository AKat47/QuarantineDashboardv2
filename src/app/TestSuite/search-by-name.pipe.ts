import { Pipe, PipeTransform } from '@angular/core';
import { ITest } from "./test";
 
@Pipe({ name: 'filter' })
export class SearchByNamePipe implements PipeTransform {
  transform(items: ITest[], searchText: string) {
    if(!items) return [];
    if(!searchText) return items;  
  searchText = searchText.toLowerCase();
  return items.filter( it => {
      return it.TestName.toLowerCase().includes(searchText);
    });
  }
}