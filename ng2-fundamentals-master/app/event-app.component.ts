
import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service'


@Component({
    selector: 'events-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    `
})

export class EventsAppComponent implements OnInit {
    ngOnInit() {
        debugger;
        this.auth.checkAuthenticationStatus()
    }
    constructor(private auth: AuthService) {

    }
} 