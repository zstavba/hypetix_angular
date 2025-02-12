import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';
import { SessionService } from '../../../auth/API/session.service';
import { CharacteristicsService } from '../../../auth/API/characteristics.service';

@Component({
  selector: 'create-characteristics-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-characteristics-modal.component.html',
  styleUrl: './create-characteristics-modal.component.scss'
})
export class CreateCharacteristicsModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter();

  public generator: Generator = new Generator();

  public CGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _CharacteristicsService: CharacteristicsService
  ){}

  ngOnInit(): void {
    this.CGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }
  ngAfterViewInit(): void {
    this.CGroup.patchValue({
      ident: this.generator.generateIdent()
    });
    
  }

  closeCreateModal = () => {
      $('.create_characteristics_mnodal').fadeOut();  
  }


  saveData = () => {
    this._CharacteristicsService.createItem(this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
