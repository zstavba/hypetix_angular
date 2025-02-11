import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../auth/API/user.service';
import { User } from '../../../../auth/Classes/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cam-shopping',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cam-shopping.component.html',
  styleUrl: './cam-shopping.component.scss'
})
export class CamShoppingComponent implements OnInit {

  @Output() shopping_information: EventEmitter<any> = new EventEmitter<any>();
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public ShoppingGroup: FormGroup = new FormGroup({
    minimum_stock: new FormControl('',Validators.required),
    block_stock: new FormControl('',Validators.required),
    singular_stock: new FormControl('',Validators.required),
    optimal_stock: new FormControl('',Validators.required),
    expences_per_unit: new FormControl('',Validators.required),
    expences_per_year: new FormControl('',Validators.required),
    average_stock: new FormControl('',Validators.required),
    optimum_stock_payment: new FormControl('',Validators.required),
    forseen_stock: new FormControl('',Validators.required),
    block_price: new FormControl('',Validators.required),
  });

  constructor(
    private _UserSerivce: UserService,
  ){}

  ngOnInit(): void {
  }

  setData = () => {
    this.systemMessage.emit("Podatki so bili poknjiženi")
    this.shopping_information.emit(this.ShoppingGroup.value);
  }


}
