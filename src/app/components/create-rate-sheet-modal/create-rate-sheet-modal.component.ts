import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../../auth/API/session.service';
import { CurrencieService } from '../../../auth/API/currencie.service';
import { InvoicesService } from '../../../auth/API/invoices.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Currencie } from '../../../auth/Classes/currencie';
import { Invoices } from '../../../auth/Classes/invoices';
import { Generator } from '../../../auth/functions/generator';
import { RatesheetService } from '../../../auth/API/ratesheet.service';
import $ from 'jquery';
import { SearchCurrenciePipe } from '../../../auth/Pipes/search-currencie.pipe';
import { SearchInvoicesPipe } from '../../../auth/Pipes/search-invoices.pipe';

@Component({
  selector: 'create-rate-sheet-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SearchInvoicesPipe,
    SearchCurrenciePipe
  ], 
  templateUrl: './create-rate-sheet-modal.component.html',
  styleUrl: './create-rate-sheet-modal.component.scss'
})
export class CreateRateSheetModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public CurrencieList: Array<Currencie> = new Array<Currencie>();
  public selectedCurrencieItem: Currencie = new Currencie();
  public selectedCurrencieItemActive: boolean = false; 
  public searchCurrencie: string = '';


  public InvoicesList: Array<Invoices> = new Array<Invoices>();
  public selectedInvoiceItem: Invoices = new Invoices();
  public selectedInvoiceItemActive: boolean = false; 
  public searchInvoice: string = '';

  public generator: Generator = new Generator();

  public RSGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_currencie_id: new FormControl(''),
    fk_invoices_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    set_date: new FormControl('',Validators.required),
    unit: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _CurrencieService: CurrencieService,
    private _InvoicesService: InvoicesService,
    private _RateSheetService: RatesheetService
  ){}

  ngOnInit(): void {
    this.getCurrencies();
    this.getInvoices();
    this.RSGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getCurrencies = () => {
    this._CurrencieService.get().subscribe(
      (response: Currencie[]) => {
        this.CurrencieList = response; 
      }
    )
  }

  setCurrencie = (C: Currencie) => {
    this.selectedCurrencieItem = C;
    this.selectedCurrencieItemActive = true;
    this.systemMessage.emit(`Valuta: '${C.code}' je bila uspešno izbrana!`);
    this.RSGroup.patchValue({
      fk_currencie_id: C
    });
  }

  getInvoices = () => {
    this._InvoicesService.get().subscribe(
      (response: Invoices[]) => {
        this.InvoicesList = response; 
      }
    )
  }

  setInvoice = (I: Invoices) => {
    this.selectedInvoiceItem = I; 
    this.selectedInvoiceItemActive = true; 
    this.RSGroup.patchValue({
      fk_invoices_id: I
    });
    this.systemMessage.emit(`Tip tečajne liste: '${I.ident}' je bil uspešno izbran !`)
  }

  saveData = () => {
    this._RateSheetService.createItem(this.RSGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => { 
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeCreateRSModal = () => {
    $('.create_rate_sheet_modal').fadeOut();
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle()
  }



}
