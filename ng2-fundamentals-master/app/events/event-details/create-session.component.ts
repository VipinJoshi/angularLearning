import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Isession } from '../shared/index'
import {restrictedWords} from '../../common/index'

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`em{float:right;color:red;padding-left:10px;}
    .error input, .error select ,.error textarea {background:red;}
    .error::webkit-input-placeholder {color:#999;}
    .error::-moz-placeholder {color:#999;}
    .error:-moz-placeholder {color:#999;}
    .error::ms-input-placeholder{color:#999;}
    `]
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400),
        restrictedWords(['foo', 'vipin'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }
    saveSession(formValues) {
        let session: Isession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }

        console.log(formValues)
    }
    


    /*
        private restrictedWords(control: FormControl): { [key: string]: any } {
            return control.value.includes('foo') ? { 'restrictedWords': 'foo' } : null;
        }
    */

    //ngOnInit() { }
}