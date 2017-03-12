import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'dropdown',
    templateUrl: 'app/nav/dropdown.component.html',
    styles: [`
        .dropdown-toggle {
            front-size: 50px !important;
            color:#F97924 !important;
        }
    `]
})
export class DropdownComponent {
    @Output() eventClick = new EventEmitter()

    keywords = ["Xiao Long Bao", "Macaron", "Icecream"]
    handleClickMe(keyword) {
        console.log ("user clicked ", keyword)
        this.eventClick.emit(keyword) // send to backend!
        // remove marker
    }
}