import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Currency} from "../models/currency.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiServices} from "../services/api.services";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{
  amount!: number;
  from_currency!: string;
  to_currency!: string;
  options$!: Observable<Currency[]>;
  history$!: Observable<any[]>
  result!: number;
  tab = [1,2,2,2,2]
  constructor(private router: Router, private api: ApiServices, private cookieService: CookieService) {}

  async getCurrencies(){
      this.options$= await this.api.getCurrencies()
  }

  async getHistory(){
    this.history$ = await this.api.getHistory();
  }

  async onSubmit(form: NgForm){
   await this.api.translate(form.value).then( value =>{
       console.log(value)
     })
  }

  async onLogout(){
    this.cookieService.delete('jwt')
    await this.router.navigateByUrl('/login')
  }

  async ngOnInit(){
    await this.getCurrencies()
    await this.getHistory()
  }

}
