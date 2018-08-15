  import { BrowserModule } from '@angular/platform-browser';
  import { ErrorHandler, NgModule } from '@angular/core';
  import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
  import { SplashScreen } from '@ionic-native/splash-screen';
  import { StatusBar } from '@ionic-native/status-bar';

  import { MyApp } from './app.component';
  import { HomePage } from '../pages/home/home';

  import { AngularFireModule } from 'angularfire2';
  import { AngularFireDatabaseModule } from 'angularfire2/database';

  import { NgxGaugeModule } from 'ngx-gauge';


  const firebaseConfig = {
	apiKey: "Your_apiKey_from_Firebase",
	authDomain: "Your_authDomain_from_Firebase", //Exp. myFirebase.firebaseapp.com
	databaseURL: "Your_databaseURL_from_Firebase",
	projectId: "Your_projectId_from_Firebase",
	storageBucket: "Your_storageBucket_from_Firebase",
	messagingSenderId: "Your_messagingSenderId_from_Firebase"
   };

  @NgModule({
    declarations: [
      MyApp,
      HomePage
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      NgxGaugeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage
    ],
    providers: [
      StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
  })
  export class AppModule { }
