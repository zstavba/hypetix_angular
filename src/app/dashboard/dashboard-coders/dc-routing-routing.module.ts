import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodersPartnersComponent } from './coders-partners/coders-partners.component';
import { CodersArticlesComponent } from './coders-articles/coders-articles.component';
import { CodersDefaultsComponent } from './coders-defaults/coders-defaults.component';
import { CodersCommercialComponent } from './coders-commercial/coders-commercial.component';
import { CodersProductionComponent } from './coders-production/coders-production.component';
import { CpTableComponent } from './coders-partners/cp-table/cp-table.component';
import { CaArticlesListComponent } from './coders-articles/ca-articles-list/ca-articles-list.component';
import { CaClassificationsComponent } from './coders-articles/ca-classifications/ca-classifications.component';
import { CaGroupsComponent } from './coders-articles/ca-groups/ca-groups.component';
import { CaArticleTypesComponent } from './coders-articles/ca-article-types/ca-article-types.component';
import { CaCodersComponent } from './coders-articles/ca-coders/ca-coders.component';
import { CaCustomTariffsComponent } from './coders-articles/ca-custom-tariffs/ca-custom-tariffs.component';
import { CaMeasurementUnitsComponent } from './coders-articles/ca-measurement-units/ca-measurement-units.component';
import { CaTaxesComponent } from './coders-articles/ca-taxes/ca-taxes.component';
import { CdWorkCentersComponent } from './coders-defaults/cd-work-centers/cd-work-centers.component';
import { CdCountryComponent } from './coders-defaults/cd-country/cd-country.component';
import { CdUnitComponent } from './coders-defaults/cd-unit/cd-unit.component';
import { CdLanguagesComponent } from './coders-defaults/cd-languages/cd-languages.component';
import { CdDeliveryConditionsComponent } from './coders-defaults/cd-delivery-conditions/cd-delivery-conditions.component';
import { CdPaymentTermsComponent } from './coders-defaults/cd-payment-terms/cd-payment-terms.component';
import { CdZipCodeComponent } from './coders-defaults/cd-zip-code/cd-zip-code.component';
import { CdSectorComponent } from './coders-defaults/cd-sector/cd-sector.component';

const routes: Routes = [
  {
    path: "",
    component: CodersPartnersComponent
  },
  {
    path: "partners/table/:user_type",
    component: CpTableComponent
  },
  // ARTICLES START
  {
    path: "articles",
    component: CodersArticlesComponent,
  },
  {
    path: "articles/list/:type",
    component: CaArticlesListComponent,
  },
  {
    path: "articles/classifications",
    component: CaClassificationsComponent,
  },
  {
    path: "articles/groups",
    component: CaGroupsComponent,
  },
  {
    path: "articles/article/types",
    component: CaArticleTypesComponent,
  },  
  {
    path: "articlea//coders",
    component: CaCodersComponent,
  },
  {
    path: "articles/custom/tariffs",
    component: CaCustomTariffsComponent,
  },
  {
    path: "articles/meassurement/units",
    component: CaMeasurementUnitsComponent,
  },
  {
    path: "articles/taxes",
    component: CaTaxesComponent,
  },
  // Articles END
  //DEFAULTS START
  {
    path: "defaults",
    component: CodersDefaultsComponent
  },
  {
    path: "defaults/work/centers",
    component: CdWorkCentersComponent
  },
  {
    path: "defaults/country",
    component: CdCountryComponent
  },
  {
    path: "defaults/units",
    component: CdUnitComponent
  },
  {
    path: "defaults/languages",
    component: CdLanguagesComponent
  },
  {
    path: "defaults/delivery/conditions",
    component: CdDeliveryConditionsComponent
  },
  {
    path: "defaults/payment/terms",
    component: CdPaymentTermsComponent
  },
  {
    path: "defaults/zip/code",
    component: CdZipCodeComponent
  },
  {
    path: "defaults/sector",
    component: CdSectorComponent
  },
  //DEFAULTS END
  {
    path: "commercials",
    component: CodersCommercialComponent
  },
  {
    path: "production",
    component: CodersProductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcRoutingRoutingModule { }
