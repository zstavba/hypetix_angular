import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';
import { SessionService } from '../../../auth/API/session.service';
import { SectorService } from '../../../auth/API/sector.service';

@Component({
  selector: 'create-sector-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-sector-modal.component.html',
  styleUrl: './create-sector-modal.component.scss'
})
export class CreateSectorModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();

  public SectorGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(), Validators.required),
    title: new FormControl('',Validators.required)
  })

  constructor(
    private _SessionService: SessionService,
    private _SectorService: SectorService
  ){}

  ngOnInit(): void {
    this.SectorGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreateSectorModal = () => {
    $('.create_sector_modal').fadeOut();
  }

  saveData = () => {
    this._SectorService.createItem(this.SectorGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
