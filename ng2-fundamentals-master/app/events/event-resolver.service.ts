/*
this is resolver class used to load component when data is ready to load its stop us to 
load page and than wait for data
*/

import {Injectable} from '@angular/core';
import {Resolve,ActivatedRouteSnapshot} from '@angular/router';
import {EventsService} from './shared/event.service';

@Injectable()
export class EventsResolver implements Resolve<any>{
    constructor(private eventService:EventsService){

    }
    //here we call the synchronous method call like ajax call
    resolve(route:ActivatedRouteSnapshot) {
      return this.eventService.getEvent(route.params['id'])
    }



}