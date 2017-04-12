import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { NgProgressModule } from 'ng2-progressbar';

import {GuardService } from './guards/guard.service';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

import {HttpClient} from './common/HttpClient';

import {AppService} from './services/app.service';
import {ProductService} from './services/product.service';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import {UserService} from './services/user.service';

const routing:Routes = [
  {path: '', component: HomeComponent, canActivate: [GuardService]},
  {path: 'products', component: ProductComponent, canActivate: [GuardService]},
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [GuardService]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgProgressModule,
    RouterModule.forRoot(routing)
  ],
  providers: [AppService,HttpClient,GuardService,UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
