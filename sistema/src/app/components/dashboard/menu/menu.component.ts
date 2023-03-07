import { Router } from '@angular/router';
import { DownloadImage } from './../../../interfaces/downloadImage';
import { ApiService } from './../../../services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  messageHour!: string;
  showNameUser!: string;
  isDefaultImage = '../../../../assets/default.png';
  imageUser!: SafeUrl;

  constructor(private localStorageService: LocalstorageService, private apiService: ApiService, private sanitizer: DomSanitizer, private router: Router) {

  }

  ngOnInit(){
    this.getNameUser();
    this.getImageUser();
  }

  getMessageHour(message: string) {
    this.messageHour = message;
  }

  getNameUser() {
    const nameUser = this.localStorageService.getLocalStorage('userInfo');
    this.showNameUser = nameUser.name;
  }

  getImageUser() {
    const nameImage = this.localStorageService.getLocalStorage('userInfo')
    this.apiService.downloadImage(nameImage.image).subscribe((res: DownloadImage) => {
      let url = 'data:image/jpg;base64,' + res.image;
      this.imageUser = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
  }

  logout() {
    this.localStorageService.removeLocalStorage('token');
    this.router.navigate(['/']);
  }

}
