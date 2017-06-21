import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'
import { IEvent } from './shared/event.model'
@Component({
    template: `<div>   
      
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
export class EventListComponent implements OnInit {
    events: IEvent[]
    constructor(private eventService: EventsService,
        private toastrService: ToastrService,
        private route: ActivatedRoute) {
        //events=this.eventService.getEvents();
        //its recomend to not use ajax call in constructor as it might take time so for that we must use 
        // lifecycle @ngInit hook to get the data for services so the code move to ngInt
    }

    ngOnInit() {
        // this.events = this.eventService.getEvents() this was prior to implementation of observable
        //this.eventService.getEvents().subscribe(events=>{this.events=events}) ;//this comment when route handler is used in rout.ts
        this.events = this.route.snapshot.data['evnt']
    }

    handleThumbnailClick(name) {
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
