import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AdminComponent } from '../../pages/admin/admin.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserComponent } from '../../pages/user/user.component';
import { EventManagementComponent } from '../../pages/event-management/event-management.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { OrganizeEventComponent } from 'src/app/pages/organize-event/organize-event.component';
import { EventHistoryComponent } from 'src/app/pages/event-history/event-history.component';
import { RegisterEventComponent } from 'src/app/pages/register-event/register-event.component';
import { EventStatusComponent } from 'src/app/pages/event-status/event-status.component';

import { templateJitUrl } from '@angular/compiler';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'admin',           component: AdminComponent },
    { path: 'user',           component: UserComponent },
    { path: 'event-management',           component: EventManagementComponent },
    { path: 'user-management',           component: UserManagementComponent },
    { path: 'event-history',           component: EventHistoryComponent },
    { path: 'organize-event',           component: OrganizeEventComponent },
    { path: 'register-event',           component: RegisterEventComponent },
    { path: 'event-status',         component: EventStatusComponent}

];
