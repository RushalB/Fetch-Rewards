import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private rest: RestApiService) { }

  data: any | null

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    let g = (this.rest.getInputFields())
    g.subscribe({
      next: (body) => {
        this.data = body

      },
      error: () => { },
      complete: () => { }
    });

  }

  create(myform: any) {
    this.rest.postUserData({
      "name": myform.username,
      "email": myform.email,
      "password": myform.password,
      "occupation": myform.occupation,
      "state": myform.states
    }).subscribe((response: any) => {
      console.log(response);
      alert((myform.username) + "'s profile created")
    });
  }
  
  reset(myform: any) {
    myform.reset()
    var dropdown
    dropdown = document.getElementById("state") as HTMLInputElement
    dropdown.value = '';
    dropdown = document.getElementById("occupation") as HTMLInputElement
    dropdown.value = '';
  }

}
