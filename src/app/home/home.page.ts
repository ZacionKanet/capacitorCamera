import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraDirection, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageSource:any;

  constructor(private domSanitizer:DomSanitizer, private router: Router,) {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source:CameraSource.Prompt,
      saveToGallery:false     
    });    
    
    //this.imageSource ='data:image/jpeg;base64,' + image.base64String;
    //console.log(this.imageSource)

    this.imageSource=this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "")
  }

  getPhoto()
  {
    return this.imageSource;
  }

  irGeo() {
    this.router.navigate(['/geo']); 
  }
}