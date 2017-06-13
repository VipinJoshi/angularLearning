import {Component,OnInit} from '@angular/core';
import {EventsService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service'

@Component({
    selector:'events-list',
    template:`<div>   
      
      <h1>
      
    Upcoming angular events     </h1>
    <hr/>
<div class="row">
<div *ngFor="let event of events" class="col-md-5">
    <events-thumbnail (click)="handleThumbnailClick(event.name)"       
     [event]="event" > </events-thumbnail>
    </div>
    </div>
    
    </div>`
    

})
//to call output (myEventClick)="handleClickMe($event)"
//[event is the property name of thumbnail component and event1 is the input parameter we passing to [event]
//{{}} is called interpolation and known as one way binding
 //to show that in the app controller use the selection in app module
    export class EventListComponent  implements OnInit
    {
      events:any[]
  constructor(private eventService:EventsService,private toastrService:ToastrService){
    //events=this.eventService.getEvents();
//its recomend to not use ajax call in constructor as it might take time so for that we must use 
// lifecycle @ngInit hook to get the data for services so the code move to ngInt
  }
  ngOnInit(){
this.events=this.eventService.getEvents()
  }

  
handleThumbnailClick(name){
  /*  toastr.success(name); as its global so we get error in command prompt screen that cannot
  find the name toastr and also it will make the code untestable so to overcome with that we need 
  to create our own service and register this toastr there*/
  this.toastrService.success(name)
} 

    }


/*/
handleClickMe(data){
    console.log(data);
}
*/
