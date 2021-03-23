import { Component } from '@angular/core';
import { ServicesService } from './services.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssign';
  dataArr:any= [
  ];
  constructor(private service:ServicesService){

  }

  ngOnInit(){
    this.getData()   
  }

  getData(){
    this.service.getData().subscribe( (data)=>{
      this.dataArr = Object.assign([],data);
      console.log(this.dataArr)
    })
  }
}
