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
import { CcShippingMethodComponent } from './coders-commercial/cc-shipping-method/cc-shipping-method.component';
import { CcCurrencieComponent } from './coders-commercial/cc-currencie/cc-currencie.component';
import { CcPriceTypeComponent } from './coders-commercial/cc-price-type/cc-price-type.component';
import { CcTrafficTypeComponent } from './coders-commercial/cc-traffic-type/cc-traffic-type.component';
import { CcExchangeRatesComponent } from './coders-commercial/cc-exchange-rates/cc-exchange-rates.component';
import { CcComplainsComponent } from './coders-commercial/cc-complains/cc-complains.component';
import { CcDebitNotesComponent } from './coders-commercial/cc-debit-notes/cc-debit-notes.component';
import { CcCreditsComponent } from './coders-commercial/cc-credits/cc-credits.component';
import { CcInvoicesComponent } from './coders-commercial/cc-invoices/cc-invoices.component';
import { CcRateSheetComponent } from './coders-commercial/cc-rate-sheet/cc-rate-sheet.component';
import { CcSupplierOrdersComponent } from './coders-commercial/cc-supplier-orders/cc-supplier-orders.component';
import { CcCustomerOrdersComponent } from './coders-commercial/cc-customer-orders/cc-customer-orders.component';
import { CcEstimatesComponent } from './coders-commercial/cc-estimates/cc-estimates.component';

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
    path: "commercials/shippping/method",
    component: CcShippingMethodComponent
  },
  {
    path: "commercials/currencie",
    component: CcCurrencieComponent
  },
  {
    path: "commercials/price/type",
    component: CcPriceTypeComponent
  },
  {
    path: "commercials/traffic/type",
    component: CcTrafficTypeComponent
  },
  {
    path: "commercials/exchange/rates",
    component: CcExchangeRatesComponent
  },
  {
    path: "commercials/complaints",
    component: CcComplainsComponent
  },
  {
    path: "commercials/debit/notes",
    component: CcDebitNotesComponent
  },  
  {
    path: "commercials/credits",
    component: CcCreditsComponent
  },
  {
    path: "commercials/invoices",
    component: CcInvoicesComponent
  },
  {
    path: "commercials/rate/sheet",
    component: CcRateSheetComponent
  },
  {
    path: "commercials/supplier/orders",
    component: CcSupplierOrdersComponent
  },
  {
    path: "commercials/customer/orders",
    component: CcCustomerOrdersComponent
  },
  {
    path: "commercials/estimates",
    component: CcEstimatesComponent
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
