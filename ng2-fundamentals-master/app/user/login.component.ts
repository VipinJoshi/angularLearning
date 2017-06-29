import { Component,Inject } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import {TOASTER_TOKEN,IToastr} from '../common/index'
@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`em{float:right;color:red;padding-left:10px}`]
})

export class LoginComponent {
    invalidLogin = false;
    constructor(private auth: AuthService, private router: Router,
    @Inject(TOASTER_TOKEN) private toastr:IToastr) {

    }

    login(formValue) {
        //console.log(formValue)
        this.auth.loginUser(formValue.userName, formValue.password).subscribe(resp => {
            if (!resp) {
               // this.invalidLogin = true;
               this.toastr.error("your credential are not valid please check username of password")
                
            }
            else {
                this.router.navigate(['events'])
               this.toastr.success(`welcome ${formValue.userName}`)
                
            }
        });

    }

    cancel() {
        this.router.navigate(['events'])
    }
}