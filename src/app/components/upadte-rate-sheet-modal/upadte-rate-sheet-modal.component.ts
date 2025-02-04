import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Currencie } from '../../../auth/Classes/currencie';
import { Invoices } from '../../../auth/Classes/invoices';
import { RateSheet } from '../../../auth/Classes/rate-sheet';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { SearchCurrenciePipe } from '../../../auth/Pipes/search-currencie.pipe';
import { SearchInvoicesPipe } from '../../../auth/Pipes/search-invoices.pipe';
import { CurrencieService } from '../../../auth/API/currencie.service';
import { InvoicesService } from '../../../auth/API/invoices.service';
import { RatesheetService } from '../../../auth/API/ratesheet.service';
import { SessionService } from '../../../auth/API/session.service';

@Component({
  selector: 'update-rate-sheet-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SearchInvoicesPipe,
    SearchCurrenciePipe
  ],
  templateUrl: './upadte-rate-sheet-modal.component.html',
  styleUrl: './upadte-rate-sheet-modal.component.scss'
})
export class UpadteRateSheetModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: RateSheet = new RateSheet();

  public CurrencieList: Array<Currencie> = new Array<Currencie>();
  public selectedCurrencieItem: Currencie = new Currencie();
  public selectedCurrencieItemActive: boolean = false; 
  public searchCurrencie: string = '';


  public InvoicesList: Array<Invoices> = new Array<Invoices>();
  public selectedInvoiceItem: Invoices = new Invoices();
  public selectedInvoiceItemActive: boolean = false; 
  
  public searchInvoice: string = '';
  public RSGroup: FormGroup | any; 

  constructor(
    private _SessionService: SessionService,
    private _CurrencieService: CurrencieService,
    private _InvoicesService: InvoicesService,
    private _RateSheetService: RatesheetService
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
    this.RSGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_currencie_id: new FormControl(this.Info.fk_currencie_id),
      fk_invoices_id: new FormControl(this.Info.fk_invoices_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      set_date: new FormControl(this.Info.set_date,Validators.required),
      unit: new FormControl(this.Info.unit,Validators.required),
      course: new FormControl(this.Info.course,Validators.required)
    });
    this.selectedCurrencieItem = this.Info.fk_currencie_id;
    this.selectedInvoiceItem = this.Info.fk_invoices_id;
  }

  closeUpdateModal = () => {
    $('.update_rate_sheet_modal').fadeOut();
  }


  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle()
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
    this._RateSheetService.updateItem(this.Info.id,this.RSGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
