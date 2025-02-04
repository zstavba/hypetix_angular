import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardCodersComponent } from './dashboard-coders/dashboard-coders.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardWorkordersComponent } from './dashboard-workorders/dashboard-workorders.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardCommercialComponent } from './dashboard-commercial/dashboard-commercial.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardHomeComponent
  },
  {
    path: "coders",
    component: DashboardCodersComponent,
    loadChildren: () => import(`./dashboard-coders/dc-routing-routing.module`).then(m => m.DcRoutingRoutingModule)
  },
  {
    path: "profile",
    component: DashboardProfileComponent
  },
  {
    path: "workorders",
    component: DashboardWorkordersComponent,
    loadChildren: () => import('./dashboard-workorders/dashboard-workorder-routing-routing.module').then(m => m.DashboardWorkorderRoutingRoutingModule)
  },
  {
    path: "commercial",
    component: DashboardCommercialComponent
  },
  {
    path: "settings",
    component: DashboardSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingRoutingModule { }
