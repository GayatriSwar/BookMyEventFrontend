import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserComponent } from './pages/user/user.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { OrganizeEventComponent } from './pages/organize-event/organize-event.component';
import { RegisterEventComponent } from './pages/register-event/register-event.component';
import { EventHistoryComponent } from './pages/event-history/event-history.component';
import { EventStatusComponent } from './pages/event-status/event-status.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserComponent,
    EventManagementComponent,
    UserManagementComponent,
    OrganizeEventComponent,
    RegisterEventComponent,
    EventHistoryComponent,
    EventStatusComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
