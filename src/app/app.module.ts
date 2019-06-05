import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NetworkComponent } from './dashboard/network/network.component';
import { PeerComponent } from './dashboard/peer/peer.component';
import { SetupOrgComponent } from './dashboard/setup-org/setup-org.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NetworkComponent,
    PeerComponent,
    SetupOrgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login', component:LoginComponent},
      { path:'signup', component:SignupComponent},
      { path:'dashboard', component:DashboardComponent,
    children:[
      { path:'setup_myorg', component:SetupOrgComponent },
      { path:'network', component:NetworkComponent },
      { path:'peer', component:PeerComponent }
    ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
