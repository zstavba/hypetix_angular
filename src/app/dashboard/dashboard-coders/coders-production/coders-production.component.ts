import { Component, OnInit } from '@angular/core';
import { NavigationsComponent } from '../../../components/navigations/navigations.component';
import { User } from '../../../../auth/Classes/user';
import { SessionService } from '../../../../auth/API/session.service';
import { Characteristics } from '../../../../auth/Classes/characteristics';
import { forkJoin } from 'rxjs';
import { CharacteristicsService } from '../../../../auth/API/characteristics.service';
import { RouterLink } from '@angular/router';
import { ClassificationTechnologicalUnitsService } from '../../../../auth/API/classification-technological-units.service';
import { ClassificationTechnologicalUnits } from '../../../../auth/Classes/classification-technological-units';

@Component({
  selector: 'app-coders-production',
  imports: [
    RouterLink,
    NavigationsComponent,
  ],
  templateUrl: './coders-production.component.html',
  styleUrl: './coders-production.component.scss'
})
export class CodersProductionComponent implements OnInit {

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public CharacteristicsList: Array<Characteristics> = new Array<Characteristics>();
  public TableItemsList: Array<any> = new Array<any>();
  public CTUList: Array<ClassificationTechnologicalUnits> = new Array<ClassificationTechnologicalUnits>(); 


  constructor(
    private _SessionService: SessionService,
    private _CharacteristicsService: CharacteristicsService,
    private _CTUService: ClassificationTechnologicalUnitsService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.URLsList = [
      {
        title: "Domov",
        url: '/dashboard',
      },
      {
        title: "Šifranti",
        url:  '/dashboard/coders',
      },
      {
        title: "Proizvodnja",
        url:  '/dashboard/coders/production',
      },
    ];
    this.loadData();
  }

  loadData = () => {
    forkJoin({
      characteristics: this._CharacteristicsService.get(),
      ctu: this._CTUService.getItems()
    }).subscribe(
      (response: any) => {
        this.CTUList = response.ctu; 
        this.CharacteristicsList = response.characteristics;
        this.updateTableData();
      }
    )
  }

  updateTableData = () => {
    this.TableItemsList = [
      {
        title: "Karakteristike kakovosti",
        items: this.CharacteristicsList.length,
        category: "karakteristike kakovosti",
        url: '/dashboard/coders/production/characteristics',
      },
      {
        title: "Klasifikcaije tehnoloških enot",
        items: this.CTUList.length,
        category: "klasifikacije tehnoloških enot",
        url: '/dashboard/coders/production/classification/technological/units',
      },
    ];
  }

}
