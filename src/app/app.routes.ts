import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "form", component: FormComponent },
  { path: "employee", component: EmployeeComponent},
  // { 
  //   path: "carrinho",
  //   loadChildren: () => import("./carrinho/carrinho.module").then( m => m.CarrinhoModule)
  // }
];
