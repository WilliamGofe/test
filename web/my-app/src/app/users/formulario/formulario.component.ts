import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.createForm(new User());

  }

  createForm(user: User) {
    this.formUser = this.formBuilder.group({
      name: [user.name],
      cep: [user.cep],
      nickname: [user.nickname],
      email: [user.email],
      password: [user.password],
      isAdmin: [user.isAdmin],
      numero: [user.numero],
      complemento: [user.complemento]

    })
  }


  onSubmit(){
    const infos = this.formUser.value 
    if(!infos.name || !infos.email || !infos.password){
      alert('preencha o nome, email e senha por favor')
    }else{
      alert('Obrigado por se cadastrar no nosso app')
      this.router.navigate(['/login']);
    }
      console.log(this.formUser.value)
      this.formUser.reset(new User());
  }

}
