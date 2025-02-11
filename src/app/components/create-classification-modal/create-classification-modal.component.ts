import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import { SessionService } from '../../../auth/API/session.service';
import { ClassificationService } from '../../../auth/API/classification.service';
import $ from 'jquery';
import { response } from 'express';

@Component({
  selector: 'create-classification-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-classification-modal.component.html',
  styleUrl: './create-classification-modal.component.scss'
})
export class CreateClassificationModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public generator: Generator = new Generator();


  public ClassificationGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    network: new FormControl('',Validators.required)
  })

  constructor(
    private _SessionService: SessionService,
    private _ClassificationService: ClassificationService
  ){}

  ngOnInit(): void {
    this.ClassificationGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeClassificationModal = () => {
    $('.create_classification_modal').fadeOut();
  }

  saveData = () => {
    this._ClassificationService.createItem(this.ClassificationGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
