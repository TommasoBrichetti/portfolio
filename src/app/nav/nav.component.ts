import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  closed:boolean = true;

  animation:boolean = false

  ngOnInit(): void {
  }

  click(){
    this.animation = true
    console.log(this.animation);

    setTimeout(() => {
      this.animation = false
      console.log(this.animation);
    }, 2000);
  }


  togglemenu(){
    if(this.closed == true){ this.closed = false}
    else{this.closed = true}

  }

}
