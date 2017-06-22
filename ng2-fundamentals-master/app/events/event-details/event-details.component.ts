import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router'
import {IEvent,Isession} from '../shared/index'
@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
    .container {padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    a {cursor:pointer;}
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode:boolean=false;
    filterBy:string="all"
    sortBy:string="votes"
    
    constructor(private eventService: EventsService,private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
        //+ sign is used to cast it to number
    }
    addSession(){
      this.addMode=true;
    }

    saveSession(session:Isession){
        const nextId=Math.max.apply(null,this.event.sessions.map(s=>s.id))
        session.id=nextId+1;
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event);
        this.addMode=false;
    }
    cancelNewSession(){
        this.addMode=false;
    }
}