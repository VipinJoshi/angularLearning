import {Component,Input} from '@angular/core'

@Component({
    selector:'collapsible-well',
    template:   `
    <div (click)="toggleContent()" class="well pointable">

    <h4>
    <ng-content select="[well-title]"></ng-content>
     </h4> 
<ng-content  *ngIf="isVisible" select="[well-body]"></ng-content>
    </div>
     
    `
})

export class CollapsibleWellComponent{
    isVisible:boolean=false;
    
    toggleContent(){
    this.isVisible=!this.isVisible;
    }

}

//ng-content tag pic the content in this case its the html content of session list component.html