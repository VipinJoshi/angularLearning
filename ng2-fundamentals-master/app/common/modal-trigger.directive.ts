import { Directive, OnInit, Inject, ElementRef,Input } from '@angular/core';
import { JQ_TOKEN } from './index'
//import { JQ_TOKEN } from './jQuery.service'

@Directive({ selector: '[modal-trigger]' })

export class ModalTrigerDirective implements OnInit {
    private element: HTMLElement;
    @Input('modal-trigger') modalId:string;//to make to modal genenric
    constructor(el: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.element = el.nativeElement
    }
    
    ngOnInit() { 
        this.element.addEventListener('click',e => {
                this.$(`#${this.modalId}`).modal({})
            })
    }
    
}