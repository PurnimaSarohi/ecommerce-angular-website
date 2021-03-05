import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private user: UserServiceService) {
  }

  ngOnInit(): void {
  }

}
