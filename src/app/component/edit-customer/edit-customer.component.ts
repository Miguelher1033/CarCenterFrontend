import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from "../../model/rest-api.service"


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  title:string ="Editar Cliente"
  model:any={}  
  model2: any = {}
  customers: [] =[]

  constructor(
    private _route: ActivatedRoute,
    public router: Router,
    public restApi: RestApiService
    ) { }

  ngOnInit() {
    let documento = +this._route.snapshot.paramMap.get('documento')
    let tipo = this._route.snapshot.paramMap.get('tipo')
    this.model = {"documento": documento, "tipo_documento": tipo}
    this.restApi.findCustomer(this.model).subscribe((data: {}) => {
      this.model = data
      this.model2 = this.model.Results[0]
    })
  }
  saveCustomer():void{
    var answer = confirm('Estas seguro de actualizar el cliente?')
    if(answer) {
    this.restApi.editCustomer(this.model2).subscribe((data: {}) => {
      
    })
    alert('Cliente actualizado correctamente')
    this.router.navigate(['home'])
  } 
  }
  
  cancelCustomer():void{
    this.router.navigate(['home'])
  }
}
