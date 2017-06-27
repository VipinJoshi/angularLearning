import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'
import {Isession,EventsService} from '../events/index'
@Component({
    selector: 'navbar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav{font-size:15px; }
        #searchForm {margin-right:100px;}
        @media(max-width:1200px){#searchForm{display:none}}   
        li>a.active{color:#F97924;}

    `]
})

export class NavBarComponent {
    searchTerm:string="";
    foundSession:Isession[]=[]
    constructor(private auth: AuthService,private eventService:EventsService) {
        //this.auth.currentUser.firstName
    }

    searchSession(searchTerm){
        this.eventService.searchSessions(searchTerm).
        subscribe(sessions=>{this.foundSession=sessions;
        })

//return foundSession;
    }
}