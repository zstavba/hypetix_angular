import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from "jquery";
@Component({
  selector: 'combo-box-menu',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './combo-box-menu.component.html',
  styleUrl: './combo-box-menu.component.scss'
})
export class ComboBoxMenuComponent implements OnInit {

  @Input() items: Array<any> = Array<any>();
  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();
  @Input() combo_title: string = '';
  @Input() combo_id: string = '';
  public selectedObject: any; 
  public selectedObjectActive: boolean  = false; 

  ngOnInit(): void {
    
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  setData = (item: any) => {
    this.selectedObject = item; 
    this.selectedObjectActive = true; 
    this.selectedItem.emit(item);
  }

  getSelectedItem(item: any): string {
    if (item?.title !== undefined) {
      return item.title;
    } else if (item?.first_name !== undefined && item?.last_name !== undefined) {
      return `${item.first_name} ${item.last_name}`;
    } else if(item?.name !== undefined){
      return item?.name;
    }else {
      return '';
    }
  }
}
