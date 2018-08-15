import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { NgModule } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Chart } from 'chart.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrData: Observable<any>;

  items: FirebaseObjectObservable<any[]>;

  gaugeType = "arch";
  gaugeTypeM = "full";
  gaugeValue = 0;
  gaugeLabelF = "Temperature";
  gaugeLabelH = "Humidity";
  gaugeLabelM = "Moisture";
  gaugeAppendText = "°C";//"V";
  gaugeAppendText2 = "%";
  gaugeAppendText3 = "";
  gaugeSize = 300;
  gaugeMin = 0;
  gaugeMax = 100;
  gaugeCap = "round";
  gaugeThick = 20;
  thresholdConfig = {
    '0':{color: 'green'},
    '33':{color: 'orange'},
    '66':{color: 'red'}
  };
  gaugeValueTemp = 0;

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  ref: FirebaseListObservable<any>;
  temperature = {
    temperature: 0,
    humidity: 0,
    time: 0
  }

  handleUserData(snapshot) {
    this.gaugeValueTemp = snapshot.val().temperature;
  }

  constructor(public navCtrl: NavController, private fbd: AngularFireDatabase, private toastCtrl: ToastController) {
    this.items = this.fbd.object('Arduino', { preserveSnapshot: true });
    this.items.subscribe(snapshot => { this.handleUserData(snapshot); });

  }
}
