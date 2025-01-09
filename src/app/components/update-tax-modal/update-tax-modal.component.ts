import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
    NotificationComponent
  ],
  templateUrl: './update-tax-modal.component.html',
  styleUrl: './update-tax-modal.component.scss'
})
export class UpdateTaxModalComponent implements OnInit {
  
  @Input() Information: Tax = new Tax();
  public TaxGroup: FormGroup | any;
  public systemMessage: string = '';



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
        $('.update_tax_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.update_tax_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.update_tax_notification').fadeIn();

        if(error.status == 404)
            this.systemMessage = 'Povezava do URLja ni bila najdena !'

        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.update_tax_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

}
