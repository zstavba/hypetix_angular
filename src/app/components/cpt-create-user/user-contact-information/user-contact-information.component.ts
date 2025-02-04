import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'user-contact-information',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './user-contact-information.component.html',
  styleUrl: './user-contact-information.component.scss'
})
export class UserContactInformationComponent implements OnInit {
  
  @Output() UserCopntactInformation: EventEmitter<any> = new EventEmitter<any>();

  public UCIGroup: FormGroup = new FormGroup({
    phone_number: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    
  }

  setItems = () => {
    this.UserCopntactInformation.emit(this.UCIGroup.value);
  }

}
