import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,//this is used to provide Forms module feature in user module
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent],
    providers: []
})

//this class name will be come after # in the main route config
export class UserModule {

}