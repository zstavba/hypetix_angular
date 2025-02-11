import { Component, OnInit, Output,EventEmitter, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../auth/Classes/user';
import { SessionService } from '../../../auth/API/session.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlternativeChippersShopping } from '../../../auth/Classes/alternative-chippers-shopping';
import { AlternativeChipersService } from '../../../auth/API/alternative-chipers.service';
import { response } from 'express';

@Component({
  selector: 'update-article-shopping',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-article-shopping.component.html',
  styleUrl: './update-article-shopping.component.scss'
})
export class UpdateArticleShoppingComponent implements OnInit {

  @Input() Info: AlternativeChippersShopping = new AlternativeChippersShopping();
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public UserInformation: User | null = new User();

  public ShoppingGroup: FormGroup | any;

  constructor(
    private _SessionService: SessionService,
    private _AlternativeChippersService: AlternativeChipersService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
  }

  initializeForm = () => {
    this.ShoppingGroup = new FormGroup({
      minimum_stock: new FormControl(this.Info.minimum_stock,Validators.required),
      block_stock: new FormControl(this.Info.block_stock,Validators.required),
      singular_stock: new FormControl(this.Info.singular_stock,Validators.required),
      optimal_stock: new FormControl(this.Info.optimal_stock,Validators.required),
      expences_per_unit: new FormControl(this.Info.expences_per_unit,Validators.required),
      expences_per_year: new FormControl(this.Info.expences_per_year,Validators.required),
      average_stock: new FormControl(this.Info.average_stock,Validators.required),
      optimum_stock_payment: new FormControl(this.Info.optimum_stock_payment,Validators.required),
      forseen_stock: new FormControl(this.Info.forseen_stock,Validators.required),
      block_price: new FormControl(this.Info.block_price,Validators.required),
    });
  
  }

  saveData = () => {
    this._AlternativeChippersService.updateShopping(this.Info.id,this.ShoppingGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
