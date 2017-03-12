"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.eventClick = new core_1.EventEmitter();
        this.keywords = ["Xiao Long Bao", "Macaron", "Icecream"];
    }
    DropdownComponent.prototype.handleClickMe = function (keyword) {
        console.log("user clicked ", keyword);
        this.eventClick.emit(keyword); // send to backend!
        // remove marker
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "eventClick", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'dropdown',
            templateUrl: 'app/nav/dropdown.component.html',
            styles: ["\n        .dropdown-toggle {\n            front-size: 50px !important;\n            color:#F97924 !important;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map