import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/users/shared/user';

@Component({
  selector: 'app-edit-formulario',
  templateUrl: './edit-formulario.component.html',
  styleUrls: ['./edit-formulario.component.css']
})
export class EditFormularioComponent implements OnInit {

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
      numero: [user.numero],
      complemento: [user.complemento]

    })
  }


  onSubmit(){
    const infos = this.formUser.value 
      alert('editado')
      this.router.navigate(['/userPage']);
  }

}
