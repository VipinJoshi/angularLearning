import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { EventsService } from './shared/event.service'

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [
        `em{float:right;color:red;padding-left:10px;}
    .error input{background:red;}
    .error::webkit-input-placeholder {color:#999;}
    .error::-moz-placeholder {color:#999;}
    .error:-moz-placeholder {color:#999;}
    .error::ms-input-placeholder{color:#999;}
    `
    ]
})

export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router, private eventsService: EventsService) { }

    cancel() {
        this.router.navigate(['/events'])
    }

    saveEvent(formValue) {
        this.eventsService.saveEvents(formValue).subscribe(event => {
            this.isDirty = false;

            this.router.navigate(['/events'])

        })

    }
}
