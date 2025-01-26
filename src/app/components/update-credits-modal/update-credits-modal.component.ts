import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { Credits } from '../../../auth/Classes/credits';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreditsService } from '../../../auth/API/credits.service';

@Component({
  selector: 'update-credits-modal',
  imports: [
    EditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-credits-modal.component.html',
  styleUrl: './update-credits-modal.component.scss'
})
export class UpdateCreditsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Credits = new Credits();
  public item_description: string = '';
  
  public CGroup: FormGroup | any; 

  constructor(
    private _CreditsService: CreditsService
  ){}

  ngOnInit(): void {
      this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm()
    }
    
  }

  initializeForm = () => {
    this.item_description = this.Info.description;
    this.CGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      description: new FormControl(this.item_description),
    })
  }

  closeUpdateCreditsModal = () => {
    $('.update_credits_modal').fadeOut();
  }

  saveData = () => {
    this.CGroup.patchValue({
      description: this.item_description
    });

    this._CreditsService.update(this.Info.id,this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )
  }

}
