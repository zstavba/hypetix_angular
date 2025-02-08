import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { TaxService } from '../../../auth/API/tax.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Tax } from '../../../auth/Classes/tax';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
@Component({
  standalone: true,
  selector: 'update-tax-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './update-tax-modal.component.html',
  styleUrl: './update-tax-modal.component.scss'
})
export class UpdateTaxModalComponent implements OnInit {
  
  @Input() Information: Tax = new Tax();
  public TaxGroup: FormGroup | any;
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();



  constructor(
    private _TaxService: TaxService,
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Information']) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    this.TaxGroup = new FormGroup({
      fk_user_id: new FormControl(this._SessionService.getSessionData()),
      ident: new FormControl(this.Information.ident, Validators.required),
      title: new FormControl(this.Information.title, Validators.required),
      stage: new FormControl(this.Information.stage, Validators.required),
      type: new FormControl(this.Information.type, Validators.required),
    });
  }

  closeTaxModal = () => {
    $('.update_tax_modal').fadeOut();
  }

  saveData = () => {
    this._TaxService.updateTax(this.Information.id,this.TaxGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
