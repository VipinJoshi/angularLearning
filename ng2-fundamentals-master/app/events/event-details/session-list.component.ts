import { Component, Input, OnChanges } from '@angular/core';
import {Isession} from '../index'

import {VoterService} from './voter.service'

import { AuthService } from '../../user/index'
@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {

    constructor(private authService: AuthService, private voterService: VoterService
    ) {

    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSession(this.filterBy)
            this.sortBy === 'name' ?
                this.visibleSession.sort(sortByNameAsc) :
                this.visibleSession.sort(sortByVotesDesc)

        }
    }

    @Input() sessions: Isession[]
    @Input() filterBy: string
    @Input() sortBy: string;
    @Input() eventId:number
    visibleSession: Isession[] = []
    filterSession(filterByValue) {
        if (filterByValue === 'all') {
            this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterByValue);
        }
    }

    toggleVote(session: Isession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId ,session, this.authService.currentUser.userName)
        }
        else {
            this.voterService.addVoter(this.eventId ,session, this.authService.currentUser.userName)
            
        }
        
        if (this.sortBy === 'votes') {
            this.visibleSession.sort(sortByVotesDesc)
        }
    }

    userHasVoted(session: Isession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }

}

function sortByNameAsc(s1: Isession, s2: Isession) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name) return 0;
    else return -1
}

function sortByVotesDesc(s1: Isession, s2: Isession) {
    return s2.voters.length - s1.voters.length
}

//Onchanges check the change in any value 