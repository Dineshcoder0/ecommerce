import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



 prodList:any;
  formalList:any;
  casualList:any;
  chappalsList:any;
  totalitems: number=0;
  // Users : any;
  Username: any;


  constructor(private service:ApiService, private router: Router, private cartservice: CartService){}
  ngOnInit(): void {
this.prodList = this.service.getProducts();
this.formalList = this.prodList.filter((x:any)=>x.CategoryId == 2 )
this.casualList = this.prodList.filter((x:any)=>x.CategoryId == 1 )
this.chappalsList = this.prodList.filter((x:any)=>x.CategoryId == 3 )
console.log(this.formalList.length);

this.cartservice.getProducts()
.subscribe(res=>{
  this.totalitems= res.length;
})

// this.Userdetails()

this.Username = sessionStorage.getItem("Name")

  }

  addtoCart(item:any){
    this.cartservice.addtoCart(item);
  }

  showId(x:any)
  {
    this.router.navigate(['/pro'], { queryParams: { proId: x,name:x} });
    //this.router.navigateByUrl ('/pro')
  }

  // Userdetails()
  // {
  //       this.service.GetUserdatas().subscribe((data: any)=>{
  //         this.Users = data.getsignup;
  //         if (data.success == true) {
  //           sessionStorage.getItem(data.userid);
  //           alert(JSON.stringify(data))
  //         }
  //       })
  // }





  }
