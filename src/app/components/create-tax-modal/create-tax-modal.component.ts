import { Component, OnInit } from '@angular/core';
import { TaxService } from '../../../auth/API/tax.service';
import { NotificationComponent } from '../notification/notification.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import { Generator } from '../../../auth/functions/generator';


@Component({
  standalone: true,
  selector: 'create-tax-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-tax-modal.component.html',
  styleUrl: './create-tax-modal.component.scss'
})
export class CreateTaxModalComponent implements OnInit {

  public UserInformation: User | null = new User();
  public generator: Generator = new Generator();

  public TaxGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('', Validators.required),
    stage: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
  });


  public systemMessage: string = '';

  constructor(
    private _TaxService: TaxService,
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.TaxGroup.patchValue({
      fk_user_id: this.UserInformation
    });
  }
  
  saveData = () => {
    	this._TaxService.createTax(this.TaxGroup).subscribe(
        (response: any) => {
          $('.create_tax_notification').fadeIn();
          this.systemMessage = response.message;
          setTimeout(() => {
            $('.create_tax_notification').fadeOut();
            this.systemMessage = '';
          },4000);
        },
        (error: any) => {
          $('.create_tax_notification').fadeIn();

          if(error.status == 404)
              this.systemMessage = 'Povezava do URLja ni bila najdena !'

          this.systemMessage = error.error.message;
          setTimeout(() => {
            $('.create_tax_notification').fadeOut();
            this.systemMessage = '';
          },4000);
        }
      )
  }

  closeTaxModal = () => {
    
    $('.create_tax_modal').fadeOut();
  }

}
