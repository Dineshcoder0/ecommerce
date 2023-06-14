import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cnts',
  templateUrl: './cnts.component.html',
  styleUrls: ['./cnts.component.scss']
})
export class CntsComponent implements OnInit {

  Username: any;

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.Username = sessionStorage.getItem("Name")

}
}


