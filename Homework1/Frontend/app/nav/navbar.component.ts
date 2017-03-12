import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html'
})
export class NavBarComponent {
    @Output() eventClick = new EventEmitter()

    navname = "♥~(ˇ◡ˇღ)___  TWEET MAP  ___(ღˇ◡ˇ)~♥";
}