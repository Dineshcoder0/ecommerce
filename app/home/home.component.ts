import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Username: any;
  Users : any;

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.Username = sessionStorage.getItem("Name")
    // this.Userdetails()

  }
  //   Userdetails()
  // {
  //       this.service.GetUserdatas().subscribe((data: any)=>{
  //         this.Users = data.getsignup;
  //         if (data.success == true) {
  //           sessionStorage.getItem(data.userid);
  //           alert(JSON.stringify(data))
  //         }
  //       })
  //     }



 }



