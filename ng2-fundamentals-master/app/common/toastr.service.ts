/*
this component is used to make service for third party tool toastr and this file is called from 
the components where we need to show the toastr notifications
*/
import { Injectable } from '@angular/core'

declare let toastr: any;

@Injectable()
export class ToastrService {
    
    success(message: string, title?: string) {
        toastr.success(message, title)
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title)
    }

    info(message: string, title?: string) {
        toastr.info(message, title)
    }

    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}