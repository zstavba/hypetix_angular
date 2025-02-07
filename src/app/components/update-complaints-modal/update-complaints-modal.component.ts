import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Complaints } from '../../../auth/Classes/complaints';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { ComplaintsService } from '../../../auth/API/complaints.service';
@Component({
  selector: 'update-complaints-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-complaints-modal.component.html',
  styleUrl: './update-complaints-modal.component.scss'
})
export class UpdateComplaintsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Complaints = new Complaints();

  public ComplaintsGroup: FormGroup | any;

  constructor(
    private _ComplaintsService: ComplaintsService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }    
  }

  initializeForm = () => {
    this.ComplaintsGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required)
    });
  }

  closeUpdateModal = () => {
    $('.update_complaints_modal').fadeOut();
  }

  saveData = () => {
    this._ComplaintsService.updateItem(this.Info.id,this.ComplaintsGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.errro.message);
      }
    )

  }

}
