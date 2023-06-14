import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  display: string = "";
  isOperatorClicked: any;
  firstNumber: string = "";


  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService,private router: Router, private service:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;

        this.grandTotal = this.cartService.getTotalPrice();
        this.products = this.products.map((i: any) => {
          return {
            productId: i.productId,
            productName: i.productName,
            Description : i.Description,
            Price : i.Price,
            imgUrl : i.imgUrl,
            quantity : 1,
            total : i.Price,

          }
        })

        this.grandTotal = this.products.reduce((a:any, b:any)=> a+Number(b.total),0)

    })


  }
  removeItem(item: any) {

    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  PlusQty(i: any) {
    this.products[i].quantity += 1;

    this.products[i].total = Number(this.products[i].quantity || 0)* Number(this.products[i].Price || 0);

    this.grandTotal = this.products.reduce((a: any, b: any) => a + Number(b.total), 0)
  }
  MinusQty(i: any) {
    if (this.products[i].quantity ==0)
{
  this.products[i].quantity =1;
}

this.products[i].quantity -= 1;

    this.products[i].total = Number(this.products[i].quantity || 0) * Number(this.products[i].Price || 0);

    this.grandTotal = this.products.reduce((a: any, b: any) => a + Number(b.total), 0)
  }

  showId(x:any)
  {
    this.router.navigate(['/pro'], { queryParams: { proId: x,name:x} });
    //this.router.navigateByUrl ('/pro')
  }

  checkout() {
    var list = [];
    alert(JSON.stringify(this.products))
    list = this.products.map((i: any) => {
      return {
        ProductId: i.productId,
        UnitPrice: i.price,
        quantity: i.quantity,
        Amount: i.total
      }
    })
    let input = {
      "orderId": 0,
      "userId": 1,
      "totalAmt": this.grandTotal,
      "createdBy": 1,
      "orderSub": list
    }
    this.service.createOrder(input).subscribe((data: any) => {
      if (data.success) {
        // alert("Order Placed");
        this.router.navigate(['/sigin'])
      }
      else {
        alert("Order not placed")
      }

    })
  }

}
