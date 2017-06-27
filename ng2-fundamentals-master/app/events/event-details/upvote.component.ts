import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['app/events/event-details/upvote.component.css']
})

export class UpvoteComponent {

    iconColor: string
    @Input() count: number

//setter is used to show the color
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white'
    }
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}