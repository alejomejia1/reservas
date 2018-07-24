var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
// import { Http ,Response } from '@angular/http';
var IngresosPage = /** @class */ (function () {
    function IngresosPage(navCtrl, restapiService) {
        this.navCtrl = navCtrl;
        this.restapiService = restapiService;
        this.postList = [];
        this.getIngresos('2018-07-01', '2018-07-31', '9tMS1A8G5QY4N84');
    }
    IngresosPage.prototype.getIngresos = function (fechaini, fechafin, apiKey) {
        var _this = this;
        // console.log('Fechaini: '+ fechaini);
        this.restapiService.getIngresos(fechaini, fechafin, apiKey)
            .then(function (data) {
            console.log(data);
            _this.ingresos = data;
        });
    };
    IngresosPage.prototype.openFilters = function () {
        console.log('crap');
    };
    IngresosPage = __decorate([
        Component({
            selector: 'page-ingresos',
            templateUrl: 'ingresos.html'
        }),
        __metadata("design:paramtypes", [NavController, RestapiServiceProvider])
    ], IngresosPage);
    return IngresosPage;
}());
export { IngresosPage };
//# sourceMappingURL=home.js.map