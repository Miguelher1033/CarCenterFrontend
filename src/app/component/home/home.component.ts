import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../model/rest-api.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title:string ="Clientes"
  model :  any ={}
  customers: [] =[]
  

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }


  deleteCustomer(i):void{
    var answer = confirm('Estas seguro de eliminar el cliente?')
    if(answer) {
    this.model = this.customers[i];
    this.restApi.deleteCustomer(this.model).subscribe((data: {}) => {
      this.model = {}
      location.reload();
    })
  }
  confirm('Cliente eliminado correctamente')
  }
  
  editCustomer(i):void{
    this.model =this.customers[i]
    this.router.navigate(['editCustomer', this.model.documento,this.model.tipo_documento])
    
  }
  newCustomer():void{
    this.router.navigate(['newCustomer'])
    
  }
  
  findCustomer():void{
    this.restApi.findCustomer(this.model).subscribe((data: {}) => {
      this.model = data
      this.customers = this.model.Results
      
    })
  }

}
