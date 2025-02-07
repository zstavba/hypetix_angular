import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { EstimatesService } from '../../../auth/API/estimates.service';
import { error } from 'console';

@Component({
  selector: 'create-estimates-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './create-estimates-modal.component.html',
  styleUrl: './create-estimates-modal.component.scss'
})
export class CreateEstimatesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();
  public item_description: string = '';


  public EstimatesGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _EstimatesService: EstimatesService
  ){}

  ngOnInit(): void {
      this.EstimatesGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      })
  }

  closeCreateModal = () => {
    $('.create_estimates_modal').fadeOut();
  }

  saveData = () => {
    this.EstimatesGroup.patchValue({
      description: this.item_description
    });
    this._EstimatesService.createItem(this.EstimatesGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }


}
