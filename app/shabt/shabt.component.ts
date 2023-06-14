import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-shabt',
  templateUrl: './shabt.component.html',
  styleUrls: ['./shabt.component.scss']
})
export class ShabtComponent implements OnInit {

  Username: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.Username = sessionStorage.getItem("Name")

  }


}
