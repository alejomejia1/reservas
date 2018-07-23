var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestapiServiceProvider = /** @class */ (function () {
    function RestapiServiceProvider(http) {
        this.http = http;
        // apiUrl = 'https://jsonplaceholder.typicode.com';
        this.apiUrl = 'http://sing.com.co/colina/api';
        console.log('Hello RestapiServiceProvider Provider');
    }
    RestapiServiceProvider.prototype.getIngresos = function (fechaini, fechafin, apiKey) {
        var _this = this;
        console.log(fechaini);
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/pagos/ingresos?fechaini=' + fechaini + '&fechafin=' + fechafin + '&apiKey=' + apiKey)
                .map(function (response) { return response; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    RestapiServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestapiServiceProvider);
    return RestapiServiceProvider;
}());
export { RestapiServiceProvider };
//# sourceMappingURL=restapi-service.js.map