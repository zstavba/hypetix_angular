import { Component, OnInit } from '@angular/core';
import { ShippingMethod } from '../../../../auth/Classes/shipping-method';
import { RouterLink } from '@angular/router';
import { ShippingMethodService } from '../../../../auth/API/shipping-method.service';

@Component({
  selector: 'app-coders-commercial',
  imports: [
    RouterLink
  ],
  templateUrl: './coders-commercial.component.html',
  styleUrl: './coders-commercial.component.scss'
})
export class CodersCommercialComponent implements OnInit {

  public ShippingMethodList: Array<ShippingMethod> = new Array<ShippingMethod>();

  public tableItems: Array<any> = new Array<any>();

  constructor(
    private _ShippingMethodService: ShippingMethodService
  ){}

  ngOnInit(): void {
    this.getShippingMethod();
    this.updateTable();
  }

  updateTable = () => {
    this.tableItems = [
      {
        title: "Načini odprem",
        items: this.ShippingMethodList.length,
        url: "/dashboard/coders/commercials/shippping/method"
      }
    ]
  }

  getShippingMethod = () => {
    this._ShippingMethodService.get().subscribe(
      (response: ShippingMethod[]) => {
        this.ShippingMethodList = response;
      }
    )
  }

}
