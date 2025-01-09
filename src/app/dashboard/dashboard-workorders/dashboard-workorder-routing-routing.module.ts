import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DwHomeComponent } from './dw-home/dw-home.component';
import { DwWorkSheetComponent } from './dw-work-sheet/dw-work-sheet.component';
import { DwMaterialSheetComponent } from './dw-material-sheet/dw-material-sheet.component';
import { DwOperationSheetComponent } from './dw-operation-sheet/dw-operation-sheet.component';
import { DwSlipSheetComponent } from './dw-slip-sheet/dw-slip-sheet.component';
import { DwBackToProductionComponent } from './dw-back-to-production/dw-back-to-production.component';
import { DwBackToReturnComponent } from './dw-back-to-return/dw-back-to-return.component';
import { DwRequestFormComponent } from './dw-request-form/dw-request-form.component';

const routes: Routes = [
  {
    path: "",
    component: DwHomeComponent
  },
  {
    path: "work/sheet",
    component: DwWorkSheetComponent
  },
  {
    path: "material/sheet",
    component: DwMaterialSheetComponent
  },
  {
    path: "operation/sheet",
    component: DwOperationSheetComponent
  },
  {
    path: "slip/sheet",
    component: DwSlipSheetComponent
  },
  {
    path: "back/to/production",
    component: DwBackToProductionComponent
  },
  {
    path: "back/to/return",
    component: DwBackToReturnComponent
  },
  {
    path: "request/form",
    component: DwRequestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardWorkorderRoutingRoutingModule { }
