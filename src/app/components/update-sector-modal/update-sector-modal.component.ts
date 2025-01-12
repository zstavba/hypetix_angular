import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Sector } from '../../../auth/Classes/sector';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SectorService } from '../../../auth/API/sector.service';
import { User } from '../../../auth/Classes/user';
import { Session } from 'inspector';
import { SessionService } from '../../../auth/API/session.service';
@Component({
  selector: 'update-sector-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-sector-modal.component.html',
  styleUrl: './update-sector-modal.component.scss'
})
export class UpdateSectorModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Sector = new Sector();

  public SectorForm: FormGroup | any; 
  public UserInformation: User | null = new User();


  constructor(
    private _SessionService: SessionService,
    private _SectorService: SectorService
  ){}

  ngOnInit(): void {
    this.initilizeForm();
    this.UserInformation = this._SessionService.getSessionData();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes["Info"]){
        this.initilizeForm();
      }    
  }

  initilizeForm = () => {
    this.SectorForm = new FormGroup({
        fk_user_id: new FormControl(this.Info.fk_user_id),
        ident: new FormControl(this.Info.ident, Validators.required),
        title: new FormControl(this.Info.title,Validators.required)
      })
  }

  closeUpdateSectorModal = () => {
    $('.update_sector_modal').fadeOut();
  }

  saveData = () => {
    this._SectorService.updateItem(this.Info.id,this.SectorForm).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )

  }


}
