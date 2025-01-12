import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CreateSectorModalComponent } from '../../../../components/create-sector-modal/create-sector-modal.component';
import { UpdateSectorModalComponent } from '../../../../components/update-sector-modal/update-sector-modal.component';
import { UploadSectorModalComponent } from '../../../../components/upload-sector-modal/upload-sector-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { SectorService } from '../../../../../auth/API/sector.service';
import { Sector } from '../../../../../auth/Classes/sector';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { SearchSectorPipe } from '../../../../../auth/Pipes/search-sector.pipe';


@Component({
  selector: 'app-cd-sector',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    CreateSectorModalComponent,
    UpdateSectorModalComponent,
    UploadSectorModalComponent,
    NotificationComponent,
    NgxPaginationModule,
    SearchSectorPipe
  ],
  templateUrl: './cd-sector.component.html',
  styleUrl: './cd-sector.component.scss'
})
export class CdSectorComponent implements OnInit {

  public systemMessage: string = '';

  public sectorList: Array<Sector> = new Array<Sector>();
  public ipp: number = 9;
  public p: any; 
  public selectedSector: Sector = new Sector();
  public UserInformation: User | null = new User();
  public searchSector: string = '';


  constructor(
    private _SessionService: SessionService,
    private _SectorService: SectorService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getSectors();
  }


  onNotify = (message: string) => {
    $('.sector_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.sector_notification').fadeOut();
      this.systemMessage = "";  
    },4000)
  }

  toggleCreateSectorModal = () => {
    $('.create_sector_modal').fadeIn();
  }

  getSectors = () => {
    this._SectorService.getItems().subscribe(
      (response: Sector[]) => {
        this.sectorList = response;
      }
    )
  }

  deleteItem = (ID: number) => {
    this._SectorService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
        this.getSectors();
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedSector = (S: Sector) => {
    this.selectedSector = S; 
    $('.update_sector_modal').fadeIn();
  }

  openUploadSectorModal = () => {
    $('.upload_sector_modal').fadeIn();
  }

}
