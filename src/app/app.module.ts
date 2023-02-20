import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './componant/user/user.component';
import { UserDetailsComponent } from './componant/user-details/user-details.component';
import { ProfileComponent } from './componant/profile/profile.component';
import { ErrorComponent } from './componant/error/error.component';
import { HeaderComponent } from './componant/header/header.component';
import { RouterModule , Routes  } from '@angular/router';
const routes:Routes = [
  {path:'', component:UserComponent},
  {path:'users', component:UserComponent},
  {path:'users/:id', component:UserDetailsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'**', component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
