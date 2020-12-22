import { ConfigurableFocusTrap } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cabeca =document.getElementsByTagName("nav")[-1500];
    const topoCabeca= cabeca.offsetTop;

    window.onscroll=function(){
      fixarTopo();
    }
    function fixarTopo(){
      if(window.pageYOffset <=topoCabeca){
        cabeca.classList.remove("StopTop");
      }else{
        cabeca.classList.add("StopTop");
      }
    }
  }
  

}
