//this service is used as guard if event not exist that redirect to 404 as information
// for that event is not exist
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventsService } from './shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventsService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id'])
        if (!eventExist)
            this.route.navigate(['/404'])
        return eventExist;
    }
}