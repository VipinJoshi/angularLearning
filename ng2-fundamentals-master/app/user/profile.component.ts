import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { TOASTER_TOKEN, IToastr } from '../common/toastr.service'

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [
    `em{float:right;color:red;padding-left:10px;}
    .error input{backgrou nd:red;}
    .error::webkit-input-placeholder {color:#999;}
    .error::-moz-placeholder {color:#999;}
    .error:-moz-placeholder {color:#999;}
    .error::ms-input-placeholder{color:#999;}
    `
  ]

})
export class ProfileComponent implements OnInit {
  private firstName: FormControl
  private lastName: FormControl
  profileForm: FormGroup  //name should be same as in html
  constructor(private auth: AuthService, private router: Router,
    @Inject(TOASTER_TOKEN) private toastr: IToastr
    // private toastr: ToastrService before opaque token
  ) {

  }
  ngOnInit() {
    //create form controls
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])//for multiple validator we pass that as an array
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    //now we need a form group that uses these controls
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  updateProfile(formsValue) {
    if (this.profileForm.valid) {
      this.auth.updateUser(formsValue.firstName, formsValue.lastName).subscribe(() => {
        this.toastr.success("information updated successfully", "profile");
      })
      //this.router.navigate(['events'])
    }
    else {
      this.toastr.warning("all details are not passed")
    }
  }
  validateLastName() {
    return (this.lastName.valid || this.lastName.untouched)
  }
  validateFirstName() {
    return (this.firstName.valid || this.firstName.untouched)

  }
  cancel() {
    this.router.navigate(['events'])
  }

  logout(){
      this.auth.logOut().subscribe(()=>{
        this.router.navigate(['/user/login'])});
  }

}