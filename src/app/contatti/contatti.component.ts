import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  form!: FormGroup;

  error:boolean =  false

  scrolled:boolean = false

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", Validators.required],
      body: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value);
      this.error =  false
      this.form.reset()
    }
    else{
      this.error =  true
    }
    //todo l'invio lo farà il beck end!
  }


  firstscroll(){
    this.scrolled = true
  }
}
