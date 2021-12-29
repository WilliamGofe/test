import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserLogin } from '../shared/user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.createForm(new UserLogin());

  }

  createForm(user: UserLogin) {
    this.formUser = this.formBuilder.group({
      email: [user.email],
      password: [user.password],
    })
  }


  onSubmit(){
      console.log(this.formUser.value)
      if(!this.formUser.value.email||!this.formUser.value.password){
        alert('preencha todos os campos')
      }else{
        this.router.navigate(['/userPage']);
      }
      this.formUser.reset(new UserLogin());
      
  }

}
