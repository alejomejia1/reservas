import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
// import * as moment from 'moment';

/**
 * Generated class for the AlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {

  alumnosList = [];
  alumno: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnoPage');
  }

  getAlumnos(term, apiKey) {

	  this.restapiService.getSearchJson(term, apiKey)
	  .then((data: any) => {
	  	//console.log(data);
      this.alumnosList = data;
	  });
	}

  getAlumnoData(id, apiKey) {

	  this.restapiService.getAlumnoData(id, apiKey)
	  .then((data: any) => {
	  	console.log(data);
      this.alumno = data;
	  });
	}

  searchAlumnos(val: any) {
    let term = new String(val.value);
    let termLenght = term.length;
    // console.log(term);
    //console.log(termLenght);
    if( termLenght > 2) {
      // console.log('Buscando Alumno');
      this.getAlumnos(term,'9tMS1A8G5QY4N84');
      console.log(this.alumnosList);

    }
  }

  searchAlumno(val: any) {
    // let term = new String(val.value);
    // let termLenght = term.length;
    console.log('Buscando Alumno' + val);
    //console.log(termLenght);
    if( val > 0) {
      // console.log('Buscando Alumno');
      this.getAlumnoData(val,'9tMS1A8G5QY4N84');
      //console.log(this.alumnosList);

    }
  }
}
