import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, Isession } from '../shared/index'
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
    addMode: boolean = false;
    filterBy: string = "all"
    sortBy: string = "votes"

    constructor(private eventService: EventsService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        //this is commented because its have an bug when we click on modal of session first time its chanfe
        // but after that url change but not the state because we are in the same component
        //   this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
        //+ sign is used to cast it to number
        this.route.params.forEach((params: Params) => {

            this.event = this.route.snapshot.data['event']
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';


            //  this.event = this.eventService.getEvent(+params['id'])
            // now reset the state

        })


    }
    addSession() {
        this.addMode = true;
    }

    saveSession(session: Isession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1;
        this.event.sessions.push(session)
        this.eventService.saveEvents(this.event).subscribe(event=>{
        this.addMode = false;

        });
    }
    cancelNewSession() {
        this.addMode = false;
    }
}