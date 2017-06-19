/*
this is resolver class used to load component when data is ready to load its stop us to 
load page and than wait for data
*/

import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventsService} from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any>{
    constructor(private eventService:EventsService){

    }
    //here we call the synchronous method call like ajax call
    resolve() {
      return this.eventService.getEvents().map(events=>events)
    }



}