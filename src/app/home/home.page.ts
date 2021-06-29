import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    /*Prova Geolocalizzazione, lascia constructor(){}*/

/*position:any;*/
  constructor(
    /*private geolocalizzazione : Geolocation*/
  ) {}
/*getLocalizzazione(){
  this.geolocalizzazione.getCurrentPosition({timeout : 3000 , enableHighAccuracy : true})
  .then(p => {
    lat : p.coords.latitude,
    lng : p.coords.longitude
  })
}
.catch(e => alert(JSON.stringify(e)))*/
}
