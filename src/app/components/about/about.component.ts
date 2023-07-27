import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  headtitle:string='About Us';
  public features:any = [
    {
      subtitle:'We Partner with you to sell your scrap',
      desc:'This text block gives a brief overview of your company. Share your philosophy, vision, or mission here.',
      imgUrl:'../../../assets/img/thumbnail.png'
    }
  ]

  ngOnInit() {
    AOS.init({
      disable: function() {
        var maxWidth = 0;
        return window.innerWidth < maxWidth;
      }
    });//AOS - 2
    // AOS.refresh();
 }
}
