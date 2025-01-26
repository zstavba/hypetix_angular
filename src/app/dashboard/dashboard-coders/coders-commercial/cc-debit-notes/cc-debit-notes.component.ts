import { Component, OnInit } from '@angular/core';
import { DebitNotesService } from '../../../../../auth/API/debit-notes.service';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';
import { DebitNotes } from '../../../../../auth/Classes/debit-notes';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import $ from 'jquery';
import { CreateDebitNotesModalComponent } from '../../../../components/create-debit-notes-modal/create-debit-notes-modal.component';
import { UpdateDebitNotesModalComponent } from '../../../../components/update-debit-notes-modal/update-debit-notes-modal.component';
import { UploadDebitNotesModalComponent } from '../../../../components/upload-debit-notes-modal/upload-debit-notes-modal.component';
import { SearchDebitNotesPipe } from '../../../../../auth/Pipes/search-debit-notes.pipe';


@Component({
  selector: 'app-cc-debit-notes',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NavigationsComponent,
    CreateDebitNotesModalComponent,
    UpdateDebitNotesModalComponent,
    UploadDebitNotesModalComponent,
    SearchDebitNotesPipe
  ],
  templateUrl: './cc-debit-notes.component.html',
  styleUrl: './cc-debit-notes.component.scss'
})
export class CcDebitNotesComponent implements OnInit {

  public UserInformation: User | null = new User();
  public DebitNotesList: Array<DebitNotes> = new Array<DebitNotes>();
  public systemMessage: string = '';
  public ipp: number = 9;
  public p: any; 
  public URLsList: Array<any> = new Array<any>();
  public selectedDebitNoteItem: DebitNotes = new DebitNotes();
  public searchNotes: string = '';
  

  constructor(
    private _SessionService: SessionService,
    private _DebitNotesService: DebitNotesService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getDebitNotes();
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
        title: "Komercijala",
        url:  '/dashboard/coders/commercials',
      },
      {
        title: "Bremepisi",
        url: '/dashboard/coders/commercials/debit/notes'
      }
    ]
  }

  getDebitNotes = () => {
    this._DebitNotesService.get().subscribe(
      (response: DebitNotes[]) => {
        this.DebitNotesList = response; 
      }
    )
  }

  onNotify = (message: string) => {
    this.systemMessage = message; 
    $('.debit_notes_notification').fadeIn();
    setTimeout(() => {
      $('.debit_notes_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  openDebitNoteModal = () => {
    $('.create_debit_notes_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._DebitNotesService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateDebitNotesModal = (item: DebitNotes) => {
    this.selectedDebitNoteItem = item; 
    $('.update_debit_notes_modal').fadeIn();
  }

  toggleUploadDebitNoteModal = () => {
    $('.upload_debit_notes_modal').fadeIn();
  }


}
