import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: any; // FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitForm() {
    const formValues = this.userForm.value;
    const newUser = new User(
      formValues['firstname'],
      formValues['lastname'],
      formValues['email'],
      formValues['drinkPreference'],
      formValues['hobbies'] ? formValues['hobbies'] :  []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users-list'])
  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
