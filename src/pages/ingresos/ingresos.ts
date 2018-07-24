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
	mat: any;
	pen: any;
	alm: any;
	fta: any;
	total: any;
	totalNoIva: any;
	iva: any;
	data: any;



	getIngresos(fechaini, fechafin, apiKey) {
    // this.ingresos = 0;
    // this.mat   = 0;
    // this.pen   = 0;
    // this.fta   = 0;
    // this.alm   = 0;
    // this.total = 0;
    // this.totalNoIva = 0;
    // this.iva = 0;
	  this.restapiService.getIngresos(fechaini, fechafin, apiKey)
	  .then((data: any) => {
	  	console.log(data);
	    this.ingresos = data;
	    this.mat   = (data.Matriculas !== null ? data.Matriculas : 0)
	    this.pen   = (data.Pensiones !== null ? data.Pensiones : 0);
	    this.fta   = (data.Fiestas !== null ? data.Fiestas : 0);
	    this.alm   = (data.Almacen !== null ? data.Almacen : 0);
	    this.total = (data.Total !== null ?  data.Total : 0);
	    this.totalNoIva = (data.TotalNoIva !== null ?  data.TotalNoIva : 0);
	    this.iva   = (data.IVA !== null ?  data.IVA : 0);

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

		this.getIngresos(today ,today,'9tMS1A8G5QY4N84');

	}


	openFilters() {
		//sendMessage() {
        console.log('Fechaini: ', this.fechaini);
        console.log('Fechaini: ', this.fechafin);
        this.getIngresos(this.fechaini,this.fechafin,'9tMS1A8G5QY4N84');

	}


	periodChange(val: any) {
		let end;
		let start;

    console.log('Val : ' + val);

		switch (val) {
      case "0": // Hoy
        start = moment().format('YYYY-MM-DD');
        end   = moment().format('YYYY-MM-DD');
        break;
      case "1": // Ayer
        start = moment().subtract(1, 'day').format('YYYY-MM-DD');
        end   = moment().format('YYYY-MM-DD');
        break;
			case "2": // Este Mes
				start = moment().startOf('month').format('YYYY-MM-DD');
				end   = moment().endOf('month').format('YYYY-MM-DD');
				break;
			case "3": // Mes Anterior
				start = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
				end   = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
				break;
			case "4": // Este Año
				start = moment().startOf('year').format('YYYY-MM-DD');
				end   = moment().endOf('month').format('YYYY-MM-DD');
				break;
			case "5": // Año Anterior
				start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
				end   = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
				break;
      case "6": // Hoy
				start = moment().subtract(6, 'days').format('YYYY-MM-DD');
				end   = moment().format('YYYY-MM-DD');
				break;
      case "7": // Hoy
				start = moment().subtract(14, 'days').format('YYYY-MM-DD');
				end   = moment().format('YYYY-MM-DD');
				break;
      case "8": // Hoy
				start = moment().subtract(29, 'days').format('YYYY-MM-DD');
				end   = moment().format('YYYY-MM-DD');
				break;
			default: // Default Hoy
				start = moment().format('YYYY-MM-DD');
				end   = moment().format('YYYY-MM-DD');
				break;
		}

    console.log('Start :' + start);
    console.log('End   :' + end);
		this.fechaini = start;
		this.fechafin = end;
		this.getIngresos(this.fechaini ,this.fechafin,'9tMS1A8G5QY4N84');

	}



}
