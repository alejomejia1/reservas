import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import * as moment from 'moment';

// import { Http ,Response } from '@angular/http';


@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html'
})

export class IngresosPage {
	postList = [];
	ingresos: any;
	fechaini: any;
	fechafin: any;
	periodo: any;
	

	getIngresos(fechaini, fechafin, apiKey) {
	  this.restapiService.getIngresos(fechaini, fechafin, apiKey)
	  .then(data => {
	  	console.log(data);
	    this.ingresos = data;
	    this.mat = data.Matriculas;
	    this.pen = data.Pensiones;
	    this.fta = data.Fiestas;
	    this.alm = data.Almacen;
	    this.total = data.Total;
	    this.totalNoIva = data.TotalNoIva;
	    this.iva = data.IVA;

	  });
	}

	constructor(public navCtrl: NavController, public restapiService: RestapiServiceProvider) {
		
		let today = moment().format('YYYY-MM-DD');
		let todayminus30day = moment().subtract(29, 'days').format('YYYY-MM-DD');

		let localTime  = moment().utc().toDate();
    	//localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
    	
    	console.log('Local Date: ' + localTime);

		console.log('Fecha inicial: ' + today);
		console.log('Fecha final: ' + todayminus30day);

		this.fechaini = todayminus30day;
		this.fechafin = today;

		this.getIngresos(todayminus30day ,today,'9tMS1A8G5QY4N84');
		
	}

	
	openFilters() {
		//sendMessage() {
        console.log('Fechaini: ', this.fechaini);
        console.log('Fechaini: ', this.fechafin);
        this.getIngresos(this.fechaini,this.fechafin,'9tMS1A8G5QY4N84');
    
	}

	thisMonth() {
		let end = moment().endOf('month').format('YYYY-MM-DD');
		let start = moment().startOf('month').format('YYYY-MM-DD');
		this.fechaini = start;
		this.fechafin = end;
		this.getIngresos(start ,end,'9tMS1A8G5QY4N84');

	}


	lastMonth() {
		let end = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
		let start = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
		this.fechaini = start;
		this.fechafin = end;
		this.getIngresos(start ,end,'9tMS1A8G5QY4N84');

	}

	thisYear() {
		let end = moment().endOf('month').format('YYYY-MM-DD');
		let start = moment().startOf('year').format('YYYY-MM-DD');
		this.fechaini = start;
		this.fechafin = end;
		this.getIngresos(start ,end,'9tMS1A8G5QY4N84');

	}

	lastYear() {
		let end = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
		let start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
		this.fechaini = start;
		this.fechafin = end;
		this.getIngresos(start ,end,'9tMS1A8G5QY4N84');

	}

	selectBox() {

		console.log(this.periodo.value);
		// switch (variable) {
		// 	case "value":
		// 		// code...
		// 		break;
			
		// 	default:
		// 		// code...
		// 		break;
		// }
		// let end = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
		// let start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
		// this.fechaini = start;
		// this.fechafin = end;
		// this.getIngresos(start ,end,'9tMS1A8G5QY4N84');

	}

	

}
