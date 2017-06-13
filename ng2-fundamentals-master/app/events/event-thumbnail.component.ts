import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'events-thumbnail',
    templateUrl: 'app/events/event-list.component.html',
    styles: [
        `.pad-left{ margin-left :10px}
        .thumbnail {min-height:220px}
        `

    ]
})

export class EventThumbnailComponent {
    @Input() event: any

    /* used in tempelate variable  logFromParent(){
         console.log('hello child you are call from parent')
     }
    @Output() myEventClick =new EventEmitter();
    handleClickMe(){
        this.myEventClick.emit('hello from child') //console.log("I am clicked")
    }*/
}
