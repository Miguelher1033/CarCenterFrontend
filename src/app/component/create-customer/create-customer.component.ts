import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../model/rest-api.service"


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  title:string ="Nuevo Cliente"
  model :  any ={}
  customers: [] =[]
  constructor(public restApi: RestApiService, 
    public router: Router) { }

  ngOnInit() {}
    
  addCustomer() {
    this.restApi.createCustomer(this.model).subscribe((data: {}) => {
      alert('Cliente creado correctamente')
      this.router.navigate(['home'])
    })
  }
  cancelCustomer():void{
    this.router.navigate(['home'])
  }
}
