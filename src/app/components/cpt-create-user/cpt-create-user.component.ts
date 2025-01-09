import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Tab,initTWE} from "tw-elements";
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  standalone: true,
  selector: 'cpt-create-user',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,

  ],
  templateUrl: './cpt-create-user.component.html',
  styleUrl: './cpt-create-user.component.scss'
})
export class CptCreateUserComponent implements OnInit {

  public selectedTabIndex: number = 0;
  public tabs: Array<any> = new Array<any>()


  public UserForm: FormGroup = new FormGroup({
    
  })

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
      this.tabs  = [
        {
          index: 0,
          id: "tab-panel-0",
          title: "Osnovno"
        },
        {
          index: 1,
          id: "tab-panel-1",
          title: "Konakti"
        }
      ]
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();    
  }

  closeCreateUserModal = () => {
    $('.cpt-create-user').fadeOut();
  }

  setVisibleContent = (ID: string) => {
    $(`#${ID}`).fadeToggle();
  }

  selectTab(key: number) {
    this.selectedTabIndex = key;
  }

}
