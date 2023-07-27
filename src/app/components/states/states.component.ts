import { Component ,OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit{

  ngOnInit() {
    AOS.init({
      disable: function() {
        var maxWidth = 0;
        return window.innerWidth < maxWidth;
      }
    });//AOS - 2
    AOS.refresh();
 }

  public states:any = [
    {
      subtitle:'Statewise \n Bidding',
      desc:"Highlight specific services or products that are unique to your business. It can be your flagship product, or a service that you've pioneered. Give it room to shine here..",
      imgUrl:'../../../assets/img/states.png'
    }
  ]

}
