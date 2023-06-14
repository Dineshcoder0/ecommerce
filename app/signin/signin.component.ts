import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginform: FormGroup;

  private storageKey = 'user-background';
  private defaultColor = '#ff00ff';
  userBackgroundColor = null;


 constructor(private service:ApiService, private router: Router , private fb:FormBuilder) {
  this.loginform = this.fb.group({
    email : ['',Validators.required],
    password : ['', Validators.required]

  })
 }

 ngOnInit(): void {


}

submit() {
  function xx(){

  }
  this.signin()
}
signin() {
  if(this.loginform.invalid){
    alert('Please Enter all requried fields')
    return
  }


      this.service.signin(this.loginform.controls["email"].value, this.loginform.controls["password"].value).subscribe((data: any) => {
        alert(JSON.stringify(data))
        if (data.success == true) {
          sessionStorage.setItem("UserId",data.userDtls[0].UserId)
          sessionStorage.setItem("Name",data.userDtls[0].name)
          this.router.navigateByUrl("/products");
        }



      })

}
}
