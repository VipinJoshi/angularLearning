import { Component } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
    templateUrl: 'app/user/login.component.html',
    styles:[`em{float:right;color:red;padding-left:10px}`]
})

export class LoginComponent {
    constructor(private auth: AuthService) {

    }

    login(formValue) {
        //console.log(formValue)
        this.auth.loginUser(formValue.userName, formValue.password);
    }
}