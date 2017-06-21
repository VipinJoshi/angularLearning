import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Isession } from '../shared/index'
import {restrictedWords} from '../../common/index'

@Component({
    
    selector:'create-session',
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
@Output() saveNewSession=new EventEmitter()//this is called from event detail components
@Output() cancelNewSession=new EventEmitter()


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

        this.saveNewSession.emit(session)

       // console.log(formValues)
    }

    cancel(){
                this.cancelNewSession.emit()
    }    


    /*
        private restrictedWords(control: FormControl): { [key: string]: any } {
            return control.value.includes('foo') ? { 'restrictedWords': 'foo' } : null;
        }
    */

    //ngOnInit() { }
}