import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private user: UserServiceService) {
  }

  ngOnInit(): void {
  }


  FormsArr: any;
  resultname: string[] = []
  //dataSource:string[]=[];
  endresult: string[] = []
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'description', 'delete'];
  data = Object.assign(this.user.getData().subscribe(data => { }));
  dataSource = new MatTableDataSource(this.data);
  //data = Object.assign(this.FormsArr);
  public isReadOnly: boolean = true;
  id: number = 0;


  contactForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      image: new FormControl({ value: "", disabled: true }, [Validators.required]),
      title: new FormControl({ value: "", disabled: true }, [Validators.required]),
      price: new FormControl({ value: "", disabled: true }, [Validators.required]),
      description: new FormControl({ value: "", disabled: true }, [Validators.required])
      //contactno:new FormControl()
    }
  )

  onSubmit(form: FormGroup) {
  }

  cartdetails() {
    this.user.getData().subscribe(data => {

      console.log("data" + JSON.stringify(data));
      this.FormsArr = data;
      console.log("data length" + this.FormsArr.length)
      for (var i = 0; i < this.FormsArr.length; i++) {
        console.log("title printing" + this.FormsArr[i]['price'])
      }
      this.dataSource.data = this.FormsArr;
      //this.dataSource = new MatTableDataSource( Object.assign(data));
    })
  }
  DeleteRecord(id: number, index: number) {
    this.user.DeleteData().subscribe(data => {
      console.log("printing post data" + JSON.stringify(data))
    })
    for (let i = 0; i < this.FormsArr.length; ++i) {
      if (this.FormsArr[i].id === id) {
        // this.FormsArr.splice(i,1);
        this.dataSource.filteredData.splice(index, 1)
        this.dataSource._updateChangeSubscription();
        //this.dataSource.data =this.FormsArr.splice(i,1);
      }
    }
  }
}
