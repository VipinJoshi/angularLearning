import { Injectable } from '@angular/core';
import { IUser } from './user.model'
import { RequestOptions, Response, Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    currentUser: IUser

    loginUser(userName: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })

        let loginInfo = { username: userName, password: password }
        return this.http.post('/api/login/', loginInfo, options).do(resp => {
            if (resp) {
                this.currentUser = <IUser>resp.json().user
            }
        }).catch(error => { return Observable.of(false) });
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity').map((response: any) => {
            if (response._body) {
                return response.json()
            }
            else {
                return {}
            }
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser
            }
        }).subscribe()

    }


    isAuthenticated() {
        return !!this.currentUser;
    }

    updateUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })
        return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options)
    }

    logOut() {
        this.currentUser = undefined;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })

        return this.http.post('/api/logout', JSON.stringify({}), options);
    }
}