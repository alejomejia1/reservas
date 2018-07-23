var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = /** @class */ (function () {
    function RemoteServiceProvider() {
        this.getApiUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    RemoteServiceProvider.prototype.getPosts = function () {
        return this.http.get(this.getApiUrl)
            .do(function (res) { return console.log(res.json()); })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    RemoteServiceProvider = __decorate([
        Injectable()
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());
export { RemoteServiceProvider };
//# sourceMappingURL=remote-service.js.map