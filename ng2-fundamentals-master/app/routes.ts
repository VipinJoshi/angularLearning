import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component'

import { EventListComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    EventRouteActivator, 
    EventsListResolver } from './events/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { evnt: EventsListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },//this is route gaurd
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]

/*
two ways to to use route guard one way is is to use as a funtion like  canDeactivateCreateEvent and other is 
by service lke EventRouteActivator both of them need to be register in app.module
//this "evnt" should match "events" in Component OnInit data["evnt"]

app/user/user.module#UserModule it has two part divided by # 1. is app targett module and 
2. is the Exported class in that module
*/