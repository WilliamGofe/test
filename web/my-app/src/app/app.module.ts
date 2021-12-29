import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './users/formulario/formulario.component';
import { DecisionComponent } from './init/decision/decision.component';
import { FormularioLoginComponent } from './login/formulario-login/formulario-login.component';
import { routing } from './app.routing';
import { UserPageComponent } from './user-page/user-page.component';
import { EditFormularioComponent } from './edit/edit-formulario/edit-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DecisionComponent,
    FormularioLoginComponent,
    UserPageComponent,
    EditFormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
