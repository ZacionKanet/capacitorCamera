import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  constructor(private toastController: ToastController, private navCtrl: NavController,) {}

async obtenerMiUbicacion(){
  let ubicacion = await Geolocation.getCurrentPosition();

  let ubicacionTexto = "Latitud:"+ubicacion.coords.latitude +" Longitud:"+ubicacion.coords.longitude

  console.log(ubicacion)
  this.mostrarToast(ubicacionTexto)
}

async mostrarToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000,
    position: 'top',
  });

  await toast.present();
}

volver() {
  this.navCtrl.navigateBack(['']);
}
  ngOnInit() {
  }

}
