import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.scss']
})
export class ProddetailsComponent implements OnInit {


  prodList:any;
  formalList:any;
  casualList:any;
  chappalsList:any;
  totalitems: number=0;


  constructor(private service:ApiService,private route: ActivatedRoute, private cartservice: CartService){}
  ngOnInit(): void {
   let proId =  this.route.snapshot.queryParams['proId']

this.prodList = this.service.getProducts();

this.casualList = this.prodList.filter((x:any)=>x.productId == proId )
this.formalList = this.prodList.filter((x:any)=>x.productId == proId )
this.chappalsList = this.prodList.filter((x:any)=>x.productId == proId )



console.log(this.formalList.length);

this.cartservice.getProducts()
.subscribe(res=>{
  this.totalitems= res.length;
})

  }

  addtoCart(item:any){
    this.cartservice.addtoCart(item);
  }



}

