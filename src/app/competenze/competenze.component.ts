import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetenzeComponent implements OnInit {
  constructor() {}

  vanilla: boolean = false;

  scrolled:boolean = false

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }



  revealL() {
    var reveals = document.querySelectorAll(".revealL");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeL");}
    }
  }
  revealR() {
    var reveals = document.querySelectorAll(".revealR");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activeR");}
    }
  }

  // onScroll() {

  // }

  // imHere(el:number){
  //   if(el == 1){
  //     this.vanilla = true
  //     console.log(this.vanilla);

  //   }
  // }


  firstscroll(){
    this.scrolled = true
  }
}
