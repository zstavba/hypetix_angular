import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { PerformanceService } from '../../../auth/API/performance.service';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';


@Component({
  selector: 'create-performance-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-performance-modal.component.html',
  styleUrl: './create-performance-modal.component.scss'
})
export class CreatePerformanceModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public generator: Generator = new Generator();

  public PWGroup : FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    performance: new FormControl('',Validators.required),
    extra: new FormControl(''),
  })

  constructor(
    private _SessionService: SessionService,
    private _PerformanceService: PerformanceService
  ){}

  ngOnInit(): void {
    this.PWGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreatePerformanceModal = () => {
    $('.create_performance_modal').fadeOut();
  }


  saveData = () => {
    this._PerformanceService.createItem(this.PWGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }


}
