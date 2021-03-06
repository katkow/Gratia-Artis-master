import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpModule } from '@angular/http'
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UserService } from './services/user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { ShareModule } from './share.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    AngularFirestoreModule,
    CartModalPageModule,
    ShareModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
