import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  getSignUp: any;
  loginform: FormGroup;
  model: any = {};
  // submitted : boolean = false;

  constructor(private service: ApiService, private router: Router, private fb: FormBuilder) {

    this.loginform = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }


  ngOnInit(): void {

    // this.f.controls['firstName'].setValue("");
  }

  // onSubmit(form: any) {
  //   this.router.navigateByUrl("/products");

  // }

  submit() {
    function xx() {

    }
    this. signup()
  }



  signup() {
    if (this.loginform.invalid) {
      alert('Please Enter all requried fields')
      return
    }

    let x = {
      "userId": 0,
      "name": this.loginform.controls['name'].value,
      "gender": this.loginform.controls['gender'].value,
      "emailId": this.loginform.controls['email'].value,
      "mobileNo": this.loginform.controls['mobile'].value,
      "password": this.loginform.controls['password'].value,
      "createdBy": 1
    }
    this.service. signup(x).subscribe((data: any) => {
      alert(JSON.stringify(data))
      if (data.success == true) {
        this.router.navigateByUrl("/sigin");
      }


    })

  }
}

