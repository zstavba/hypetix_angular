import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { CreditsService } from '../../../auth/API/credits.service';
import { Generator } from '../../../auth/functions/generator';


@Component({
  selector: 'create-credits-modal',
  imports: [
    EditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-credits-modal.component.html',
  styleUrl: './create-credits-modal.component.scss'
})
export class CreateCreditsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public item_description: string = '';
  public generator: Generator = new Generator();

  public CGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl(''),
  })

  constructor(
    private _SessionService: SessionService,
    private _CreditsService: CreditsService,
  ){}

  ngOnInit(): void {
    this.CGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData(),
    });

  }

  closeCreateCreditsModal = () => {
    $('.create_credits_modal').fadeOut();
  }

  saveData = () => {
    this.CGroup.patchValue({
      description: this.item_description
    });
    
    this._CreditsService.create(this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
