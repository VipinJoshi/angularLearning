/*
this component is used to make service for third party tool toastr and this file is called from 
the components where we need to show the toastr notifications
*/
import { OpaqueToken } from '@angular/core'

export let TOASTER_TOKEN = new OpaqueToken('toastr');//this is javascript object

export interface Toastr {
    success(message: string, title?: string): void
    warning(message: string, title?: string): void
    info(message: string, title?: string): void
    error(message: string, title?: string): void
}