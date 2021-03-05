import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private user: UserServiceService,public dialog: MatDialog) {
    this.user.getData().subscribe(data => {

      console.log(data);
      this.FormsArr = data;
      console.log("data length" + this.FormsArr.length)
      for (var i = 0; i < this.FormsArr.length; i++) {
        console.log("title printing" + this.FormsArr[i]['price'])
      }
      this.dataSource.data = this.FormsArr;
      //this.dataSource = new MatTableDataSource( Object.assign(data));
    })
  }

  ngOnInit(): void {
  }

  clicked = false;
  FormsArr: any;
  resultname: string[] = []
  //dataSource:string[]=[];
  endresult: string[] = []
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'description', 'addcart'];
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

  AddRecord(obj1: object) {
    let formDataArray1 = [];
    let formDataArray2=JSON.stringify(obj1)
    formDataArray1.push(formDataArray2);
    console.log(formDataArray1);
    
    this.user.postData(formDataArray1).subscribe(data => {
      console.log("printing post data"+JSON.stringify(data))
    })
    this.openDialog()
}

openDialog()
{
  //this.router.navigateByUrl('/NavToLogin')
  console.log("hiee")
  const dialogRef = this.dialog.open(DialogComponentComponent, {
    width: '450px',
    height: '200px'
  }); 
  setTimeout(() => {
    dialogRef.close();
  }, 10000);
  
}
}
