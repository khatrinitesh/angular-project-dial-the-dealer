import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  headtitle:string = 'Hear it from clients';

  ngOnInit() {
    AOS.init({
      disable: function() {
        var maxWidth = 0;
        return window.innerWidth < maxWidth;
      }
    });//AOS - 2
    AOS.refresh();
 }

  public clients:any = [
    {
      name:'Celine Guajardo',
      jobtitle:'Koa & Sons',
      thumb:'../../../assets/img/clients/client1.png',
      desc:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from actual clients is invaluable.",
    },
    {
      name:'Connor Hamilton',
      jobtitle:'Randelo Co.',
      thumb:'../../../assets/img/clients/client2.png',
      desc:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from actual clients is invaluable.",
    },
    {
      name:'Aaron Loeb',
      jobtitle:'Anissa & Tam',
      thumb:'../../../assets/img/clients/client3.png',
      desc:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from actual clients is invaluable.",
    },
  ]

}
