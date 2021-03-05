import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {map} from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    //loginForm: FormGroup;
  
    constructor(private user:UserServiceService) {
        this.user.getData().subscribe(data=>
          {
          console.warn(data)
          })
    }
    ngOnInit(): void {
      //this.loginForm = this.fb.group({
      //  emailAddress: ['',],
      //  password: ['',]
      //});
    }

}
