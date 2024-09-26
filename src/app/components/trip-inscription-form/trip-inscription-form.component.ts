import { Component, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Inscription } from '../interfaces/inscription'
import { User } from '../interfaces/user'
import { InscriptionService } from '../../api/inscription-service.service'

@Component({
  selector: 'app-trip-inscription-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './trip-inscription-form.component.html',
  styleUrl: './trip-inscription-form.component.css'
})
export class TripInscriptionFormComponent implements OnInit {
  @Input() public tripId: number = 0;
  public tripInscriptionForm: FormGroup = new FormGroup({});
  private insciprionMock: Inscription = {
    allergies: 'asdf',
    people: 0,
    questions: 'asdf',
    tripId: 1,
    user: {
      name: 'asdf',
      surnames: 'sadf',
      dob: 'asdf',
      passportId: 'asdf',
      phoneNumber: 0,
      email: 'asdf@gmail.com',
      country: 'asdf',
      city: 'asdf',
      address: 'asdf',
    }
  };
  public formStatus=""

  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionService) {}

  ngOnInit(): void {
    this.tripInscriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      surnames: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      passportId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      people: ['', Validators.required],
      allergies: [''],
      questions: ['']
    })
  }

  onSubmit(): void {
    if (this.tripInscriptionForm.valid) {
      let user: User = {
        name: this.tripInscriptionForm.value.name,
        surnames: this.tripInscriptionForm.value.surnames,
        dob: this.tripInscriptionForm.value.dob,
        email: this.tripInscriptionForm.value.email,
        country: this.tripInscriptionForm.value.country,
        city: this.tripInscriptionForm.value.city,
        address: this.tripInscriptionForm.value.address,
        passportId: this.tripInscriptionForm.value.passportId,
        phoneNumber: this.tripInscriptionForm.value.phoneNumber,
      };
      let inscription: Inscription = {
        user: user,
        tripId: this.tripId,
        people: this.tripInscriptionForm.value.people,
        allergies: this.tripInscriptionForm.value.allergies,
        questions: this.tripInscriptionForm.value.questions
      };
      this.inscriptionService.putInscription(inscription).subscribe(response => console.log(response));
      this.formStatus = "Thank you for the inscription! We will contact you soon..."
    }
  }

  formChanged() {
    if (!this.tripInscriptionForm.valid) {
      this.formStatus = "Inscription not valid, please fill all the required fields";
    } else {
      this.formStatus = "";
    }
  }
}
