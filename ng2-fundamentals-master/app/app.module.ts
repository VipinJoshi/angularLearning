//this is where bootstrapping is done by registering our component
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';
import { EventsAppComponent } from './event-app.component'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav/navbar.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {
    EventListComponent, 
    EventThumbnailComponent,
    EventsService, 
    EventDetailsComponent, 
    CreateEventComponent, 
    EventRouteActivator, 
    EventsListResolver,
    CreateSessionComponent
} from './events/index'
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component'
import {AuthService} from './user/auth.service'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        
    ],
    declarations: [EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent
    ],
    bootstrap: [EventsAppComponent],
    providers: [EventsService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyStateOfEvent }]
})

export class AppModule { }

/*
here we check create event state is dirty or not we set a bool value in CreateEventComponent 
and use here 
*/
function checkDirtyStateOfEvent(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('form is not complete do you realy want to leave the page');

    return true;
}


