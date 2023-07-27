import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  ngOnInit() {
    AOS.init({
      disable: function() {
        var maxWidth = 0;
        return window.innerWidth < maxWidth;
      }
    });//AOS - 2
    AOS.refresh();
 }

  word1:string='GET SCRAP'
  word2:string='AT YOUR'
  word3:string='RATE'

}
