import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch',
  standalone: true
})
export class UserSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim(); // Remove whitespace from the beginning and end
  
    const filteredItems = items.filter(item =>
      this.userContainsFilterText(item,searchText)
    );
  
    return filteredItems;
  }
  
  private userContainsFilterText = (item: any, filterText: string): boolean => {
    try {

      if(item.first_name !== undefined || item.last_name !== null){
        filterText = filterText.toLowerCase();
        const filterTerms = filterText.split(' ');

        for(let term of filterTerms){

          let hasFilterTerms = false;
          if(item.first_name && item.first_name.toLowerCase().includes(term)){
            return  true;
          }

          if(item.last_name && item.last_name.toLowerCase().includes(term)){
            return  true;
          }

          if (!hasFilterTerms) {
            return false; 
          }   

        }
        return true;

      }else{
          throw new Error(`Error: Objekt nima podanega parametra za iskanje. `)
      }

    } catch(error: Error | any) {
      throw new Error(error);
    }
  }
}
