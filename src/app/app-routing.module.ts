import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { AllComponent } from './components/all/all.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'platforms',component:PlatformsComponent},
  {path:'all',component:AllComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'register',component:RegisterComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
