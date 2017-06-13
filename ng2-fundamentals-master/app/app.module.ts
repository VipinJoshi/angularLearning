//this is where bootstrapping is done by registering our component
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './event-app.component';
import {EventListComponent} from './events/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventsService} from './events/shared/event.service';
import{ToastrService} from './common/toastr.service';

@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,EventListComponent,EventThumbnailComponent,NavBarComponent],
    bootstrap:[EventsAppComponent],
    providers:[EventsService,ToastrService]
})

export class AppModule{}


