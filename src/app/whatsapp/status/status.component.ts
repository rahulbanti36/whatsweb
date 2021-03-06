import { ContactService } from './../../services/contact/contact.service';
import { StatusServicesService } from './../../services/status-services.service';
import { Component, OnInit } from '@angular/core';
import { UserstateService } from '../../services/user/userstate.service';
// import { user } from '../shared/model/user.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
currentuser:user;
statusdata:statusdoc[];
mystat:boolean=false;
mystates:statusdoc;
  constructor(private _user:UserstateService,private _statusservice:StatusServicesService,private _contactt:ContactService) { }

  ngOnInit( ) {
    this._user.getuser().then(res=>{
      this.currentuser=Object.assign(res);
      // console.log(this.currentuser.cuser)
      this._statusservice.getstatus().subscribe(res=>{
        this.statusdata=res
        this.mystates=this.statusdata.find(d=>d.mobileno==this.currentuser.cuserNumber)
        if(this.mystates){
          this.mystat=true;
        }
  
      })
    })
  }
  getbackground(b:string){
    let style={
      'background-image':"url('"+b+"')",
      "background-size":'cover',
      "background-position":'center'
    }
    return style;

  }
  getUserDetail(num,type,value?){
    return this._contactt.getFromContact(num,type,value)
      }
}
