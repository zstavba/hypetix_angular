import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSector'
})
export class SearchSectorPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim(); // Remove whitespace from the beginning and end
  
    const filteredItems = items.filter(item =>
      this.coderContainsFilterText(item,searchText)
    );
  
    return filteredItems;
  }
  
  private coderContainsFilterText = (item: any, filterText: string): boolean => {
    try {

      if(item.title !== undefined || item.title !== null){
        filterText = filterText.toLowerCase();
        const filterTerms = filterText.split(' ');

        for(let term of filterTerms){

          let hasFilterTerms = false;
         if(item.title && item.title.toLowerCase().includes(term)){
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
