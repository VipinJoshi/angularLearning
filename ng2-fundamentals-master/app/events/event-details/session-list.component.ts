import { Component, Input, OnChanges } from '@angular/core';
import { Isession } from '../shared/index'
@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
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
    visibleSession: Isession[] = []
    filterSession(filterByValue) {
        if (filterByValue === 'all') {
            this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterByValue);
        }
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