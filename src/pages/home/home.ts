import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';


// import { Http ,Response } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	postList = [];
	ingresos: any;
	fechaini: any;

	getIngresos(fechaini, fechafin, apiKey) {
	  this.restapiService.getIngresos(fechaini, fechafin, apiKey)
	  .then(data => {
	  	console.log(data);
	    this.ingresos = data;
	  });
	}

	constructor(public navCtrl: NavController, public restapiService: RestapiServiceProvider) {
		
		this.getIngresos('2018-07.01','2018-07-31','9tMS1A8G5QY4N84');
		
	}

	
	openFilters() {
		//sendMessage() {
        console.log('Fechaini: ', this.fechaini);
        console.log('Fechaini: ', this.fechafin);
        this.getIngresos(this.fechaini,this.fechafin,'9tMS1A8G5QY4N84');
    
	}

	

}
