import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _httpClient: HttpClient) { }
  postData(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails",value).toPromise()
   .then((data)=>{resolve(data)
  })
  }
 
  data1:any;
  getData(){
    return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails")
    .pipe(map(res=>this.data1=res))

  }

  postorg(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup",value).toPromise()
   .then((data2)=>{resolve(data2)
  })
  }
  detail:any;
  postnet(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network",value).toPromise()
   .then((data3)=>{resolve(data3)
  })
}
     
    data5:any;
    getNet(){
      return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network")
      .pipe(map(res=>this.data5=res))
  
    }

    data6:any;
    getOrg(){
      return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup")
      .pipe(map(res=>this.data6=res))
  
    }
    mydata:any;
    deleteorg(value){
      return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup'+value)
      .pipe(map(res=>this.mydata=res))
    }
    deldata:any;
    deletenet(value){
      return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/network'+value)
      .pipe(map(res=>this.deldata=res))
    }
}
