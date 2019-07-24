import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data1:any;
  detail:any;
  data5:any;
  deldata:any;
  del:any;
  editdata:any;
  data6:any;
  data8:any;
  data11:any;
  data12:any;
  mydata:any; 

  constructor(private _httpClient: HttpClient) { }
  postData(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails",value).toPromise()
   .then((data)=>{resolve(data)
  })
  }
 
  getData(){
    return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails")
    .pipe(map(res=> {
      // console.log('res --------------------------', res)
      this.data1=res;
      return this.data1;

    }
  ))

  }

  postorg(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup",value).toPromise()
   .then((data2)=>{ return data2 /* NOTE: use 'return data2' if  u r using multiline */ })
  }
  postnet(value){
    return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network",value).toPromise()
   .then((data3)=>{ return data3 /* NOTE: use 'return data3' if  u r using multiline */ })
  }
     
    getNet(){
      return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network")
      .pipe(map(res=> {
        this.data5 = res;
        return this.data5;
        console.log(this.data5)
        
      }
    ))
  
    }
    getOrg(){
      return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup")
      .pipe(map(res=> {
        this.data6 = res;
        return this.data6;
        
      }
    ))
  
    }

   

    deleteorg(value){
      return this._httpClient.delete("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup/"+value)
      .pipe(map(res=>{
        this.mydata = res;
        return this.mydata;
      }
    ));
    }

    deletenet(value){
      return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/network/'+value)
      .pipe(map(res=> {
        this.deldata = res;
        return this.deldata;
      }
    ));
    }
    updated(value){
      return this._httpClient.put("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup/1",value)
      .pipe(map(res=> {
        this.editdata = res;
        return this.editdata;
      }
    ));
    }

    postAorg(value){
      return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization",value).toPromise()
     .then((data8)=>{ return data8 /* NOTE: use 'return data2' if  u r using multiline */ })
    }
    getAOrg(){
      return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization")
      .pipe(map(res=> {
        this.data8 = res;
        return this.data8;
        
      }
    ))
  
    }
    deleteAorg(value){
      return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization/'+value)
      .pipe(map(res=> {
        this.del = res;
        return this.del;
      }
    ));
    }

    postPeer(value){
      return this._httpClient.post("https://5d15e022df4e5f00145ca8c1.mockapi.io/peerdetails",value).toPromise()
     .then((data11)=>{ return data11 /* NOTE: use 'return data2' if  u r using multiline */ })
    }
    getPeer(){
      return this._httpClient.get("https://5d15e022df4e5f00145ca8c1.mockapi.io/peerdetails")
      .pipe(map(res=> {
        this.data12 = res;
        return this.data12;
        
      }
    ))
  
    }


    deletePeer(value){
      console.log(value);
      
      return this._httpClient.delete('https://5d15e022df4e5f00145ca8c1.mockapi.io/peerdetails/'+value)
      .pipe(map(res=> {
        this.del = res;
        return this.del;
      }
    ));
    }

    postOrder(value){
      return this._httpClient.post("https://5d15e022df4e5f00145ca8c1.mockapi.io/orderdetail",value).toPromise()
     .then((data11)=>{ return data11 /* NOTE: use 'return data2' if  u r using multiline */ })
    }

    getOrder(){
      return this._httpClient.get("https://5d15e022df4e5f00145ca8c1.mockapi.io/orderdetail")
      .pipe(map(res=> {
        this.data12 = res;
        return this.data12;
        
      }
    ))
  
    }


    deleteOrder(value){
      console.log(value);
      
      return this._httpClient.delete('https://5d15e022df4e5f00145ca8c1.mockapi.io/orderdetail/'+value)
      .pipe(map(res=> {
        this.del = res;
        return this.del;
      }
    ));
    }

    postUser(value){
      return this._httpClient.post("https://5d36db6c86300e0014b647e8.mockapi.io/userdetails",value).toPromise()
     .then((data12)=>{ return data12 /* NOTE: use 'return data2' if  u r using multiline */ })
    }

    getUser(){
      return this._httpClient.get("https://5d36db6c86300e0014b647e8.mockapi.io/userdetails")
      .pipe(map(res=> {
        this.data12 = res;
        return this.data12;
        
      }
    ))
  
    }

    deleteUser(value){
      console.log(value);
      
      return this._httpClient.delete('https://5d36db6c86300e0014b647e8.mockapi.io/userdetails/'+value)
      .pipe(map(res=> {
        this.del = res;
        return this.del;
      }
    ));
    }


    postChannel(value){
      return this._httpClient.post("https://5d36db6c86300e0014b647e8.mockapi.io/channeldetail",value).toPromise()
     .then((data12)=>{ return data12 /* NOTE: use 'return data2' if  u r using multiline */ })
    }

    
    getChannel(){
      return this._httpClient.get("https://5d36db6c86300e0014b647e8.mockapi.io/channeldetail")
      .pipe(map(res=> {
        this.data12 = res;
        return this.data12;
        
      }
    ))
  
    }

}
