import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  getInputFields(){
    let url = "https://frontend-take-home.fetchrewards.com/form"
    let result = this.http.get(url)
    return result
  }

  postUserData(data:object){
    let url = "https://frontend-take-home.fetchrewards.com/form"
    return this.http.post(url,data)
  }
}
