import { ModuleWithProviders } from "@angular/core";
declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
import { RouterModule, Routes } from "@angular/router";
import { EditFormularioComponent } from "./edit/edit-formulario/edit-formulario.component";
import { DecisionComponent } from "./init/decision/decision.component";
import { FormularioLoginComponent } from "./login/formulario-login/formulario-login.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { FormularioComponent } from "./users/formulario/formulario.component";

const APP_ROUTES: Routes = [
    {path: '', component:DecisionComponent},
    {path: 'cadastro', component:FormularioComponent},
    {path: 'login', component:FormularioLoginComponent},
    {path: 'userPage', component:UserPageComponent},
    {path: 'editPage', component:EditFormularioComponent},
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);