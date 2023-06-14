import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://aravind.website/"

  private url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  list = [

    {
      "productId": 1, "productName": "Leather Designer  ", "CategoryId": 2,
      "Description": "the shoes feature a neat design & are finished with classic stitch detailing .", "Price": "234.00",
      "imgUrl": "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/v/i/e/-original-imaghvb57ftpkfxb.jpeg?q=70"
    },
    {
      "productId": 5, "productName": "Men's Tan Faux Leather", "CategoryId": 2,
      "Description": "These men's black dress casual shoes are a sweet union of authentic craftsmanship and the latest technology in shoemaking .", "Price": "679.00",
      "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vU4ICohAkwBjSqdzsLBjGCWsJZG59CeGOOWCagRqdQ&usqp=CAU&ec=48665698"
    },
    {
      "productId": 6, "productName": "Synthetic Leather ", "CategoryId": 2,
      "Description": "Finely Stitched Multi-layer Upper For Water-resistant And Fine Dust Prevention Offers ", "Price": "935.00",
      "imgUrl": "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/8/h/b/-original-imagg6r2whsbqtdz.jpeg?q=90&crop=false"
    },
    { "productId": 2, "CategoryId": 1, "productName": "PUMA ", "Description": "PUMA Shoe good looking casual shoes Casuals For Men .", "Price": "450.00", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3y0O9sZNUvszsBQSTj-j6pcKxC5giT3yINEpdNxCZ8Hy_7cJSgsDD7EY-2dkL8xMFGRMcWpat9yg&usqp=CAU&ec=48665698" },
    { "productId": 3, "productName": "Xtoon White ", "CategoryId": 1, "Description": " white good looking casual shoes Casuals For Men", "Price": "589.00", "imgUrl": "https://rukminim1.flixcart.com/image/832/832/l2urv680/shoe/o/i/2/6-5555-xtoon-white-original-image34eajjz4bpg.jpeg?q=70" },
    { "productId": 4, "productName": "Black Nike ", "CategoryId": 1, "Description": "Court Vapor Lite Hard Court Sneakers For Men", "Price": "960.00", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdqCPNDcOuSss6eFbeKb9xsi_pFRfjpNu0eUielwHew&usqp=CAU&ec=48665698" },

    { "productId": 7, "productName": "Grey Clogs Sandal ", "CategoryId": 3, "Description": "Men's sandals are well crafted, breathable, supremely comfortable", "Price": "269.00", "imgUrl": "https://rukminim1.flixcart.com/image/612/612/xif0q/sandal/r/s/p/-original-imagg4zmteafew6f.jpeg?q=70" },
    { "productId": 8, "productName": "Blue Sports Sandal ", "CategoryId": 3, "Description": "Men's sandals are well crafted, breathable, supremely comfortable", "Price": "369.00", "imgUrl": "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/p/x/n/-original-imaggcb3hzhvybbv.jpeg?q=70" },
    { "productId": 9, "productName": "Men Brown Sandal ", "CategoryId": 3, "Description": "Men's sandals are well crafted, breathable, supremely comfortable", "Price": "213.00", "imgUrl": "https://rukminim1.flixcart.com/image/832/832/l0cr4i80/sandal/i/q/b/8-ts-090-teer-brown-original-imagc63qgmyfeuhz.jpeg?q=70" },
  ]




  constructor(private http: HttpClient) { }
  getProducts() {
    return this.list;
  }




  getcatfacts() {
    return this.http.get("https://catfact.ninja/fact")
  }


  signup(input: any) {

    return this.http.post("http://92.205.109.210:8013/SignUp/InsertSignUp", input);

  }

  Getsignup() {
    return this.http.get("http://92.205.109.210:8013/SignUp/GetSignUp")
  }

  signin(username:any,password:any) {
    return this.http.get("http://92.205.109.210:8013/SignUp/SignIn?emailId="+username + "&password="+password)
  }

  // http://92.205.109.210:8013/SignUp/SignIn?username="+username + "&password="+password

  // http://92.205.109.210:8013/SignUp/SignIn?emailId=sa@gmail.com&password=123

  postEmployee(input: any) {

    return this.http.post("http://127.0.0.1:8000/general/create", input);

  }

  GetEmployee() {

    return this.http.get("http://127.0.0.1:8000/general/detail/")
  }

  checkout(){
    return this.http.get("http://92.205.109.210:8013/Order/GetOrder")
  }
  createOrder(input:any)
  {
    return this.http.post("http://92.205.109.210:8013/Order/InsertOrder", input);
  }

GetUserdatas()
{
  return this.http.get("http://92.205.109.210:8013/SignUp/GetSignUp")
}

getPosts(){
  return this.http.get(this.url);
}



}
