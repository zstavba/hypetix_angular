import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PerformanceWork } from '../../../auth/Classes/performance-work';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { PerformanceService } from '../../../auth/API/performance.service';
@Component({
  selector: 'update-performance-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-performance-modal.component.html',
  styleUrl: './update-performance-modal.component.scss'
})
export class UpdatePerformanceModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: PerformanceWork = new PerformanceWork();

   public PWGroup : FormGroup | any;
  constructor(
    private _PerformanceService: PerformanceService
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
  this.PWGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      performance: new FormControl(this.Info.performance,Validators.required),
      extra: new FormControl(this.Info.extra),
    })

  }
    
  closeUpdateModal = () => {
    $('.update_performance_modal').fadeOut();
  }

  saveData = () => {
    this._PerformanceService.updateItem(this.Info.id,this.PWGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
