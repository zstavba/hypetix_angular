import { Component,Output, Input, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Characteristics } from '../../../auth/Classes/characteristics';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { CharacteristicsService } from '../../../auth/API/characteristics.service';
@Component({
  selector: 'update-characteristics-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-characteristics-modal.component.html',
  styleUrl: './update-characteristics-modal.component.scss'
})
export class UpdateCharacteristicsModalComponent  implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Characteristics = new Characteristics(); 
  public CGroup: FormGroup | any; 

  constructor(
    private _CharacteristicsService: CharacteristicsService
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
    this.CGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required)
    });
  }

  closeUpdateModal = () => {
    $('.update_characteristics_modal').fadeOut();
  }

  saveData = () => {
    this._CharacteristicsService.updateItem(this.Info.id,this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
