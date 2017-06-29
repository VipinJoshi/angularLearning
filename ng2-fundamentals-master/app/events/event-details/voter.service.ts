import { Injectable } from '@angular/core';
import { Isession } from '../index'
import { Http, Response, RequestOptions, Headers, } from '@angular/http'
import { Observable } from 'rxjs/Rx';
@Injectable()
export class VoterService {
    constructor(private http: Http) {

    }
    deleteVoter(eventId: number, session: Isession, voterName: string) {
        let url = `/api/events/${eventId}/sessions/
        ${session.id}/voters/${voterName}`

        this.http.delete(url).catch(this.handleError).subscribe(

            () => { session.voters = session.voters.filter(voter => voter !== voterName)});
        //  
    }

    addVoter(eventId: number, session: Isession, voterName: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe(() => {
            session.voters.push(voterName);
        });
        //   
    }

    userHasVoted(session: Isession, voterName: string) {
        return session.voters.some(voter => voter === voterName)
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText)

    }
}