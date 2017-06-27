import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './index'
@Component({
    selector: 'simple-modal',
    templateUrl: '/app/common/simple-modal.component.html',
    styles: [`.modal-body{height:250px;overflow-y:scroll;}`]

})

export class SimpleModalComponent {
    constructor( @Inject(JQ_TOKEN) private $: any) {

    }
    @Input() title: string
    @Input() elementId: string
    @ViewChild('modalContainer') containerElement: ElementRef
   //modalContainer this is ref in html and this can be used as indicator as viewchild it point to the div 
    closeModal() {
        this.$(this.containerElement.nativeElement).modal('hide');
    }
}