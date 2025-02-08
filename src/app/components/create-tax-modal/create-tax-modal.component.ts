import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
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


  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

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
          this.systemMessage.emit(response.message);
        },
        (error: any) => {
          this.systemMessage.emit(error.error.message);
        }
      )
  }

  closeTaxModal = () => {
    
    $('.create_tax_modal').fadeOut();
  }

}
