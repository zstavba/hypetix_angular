import { Component, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlternativeChipersService } from '../auth/API/alternative-chipers.service';
import { ArticleTypeService } from '../auth/API/article-type.service';
import { BackToProductionService } from '../auth/API/back-to-production.service';
import { BankService } from '../auth/API/bank.service';
import { CharacteristicsService } from '../auth/API/characteristics.service';
import { ClassificationWorkProceduressService } from '../auth/API/classification-work-proceduress.service';
import { ClassificationService } from '../auth/API/classification.service';
import { CommercialStatesService } from '../auth/API/commercial-states.service';
import { ConnectionService } from '../auth/API/connection.service';
import { CostCentersService } from '../auth/API/cost-centers.service';
import { CurrencieService } from '../auth/API/currencie.service';
import { CustomTariffsService } from '../auth/API/custom-tariffs.service';
import { DCACFormService } from '../auth/API/dcacform.service';
import { ExchangeRatesService } from '../auth/API/exchange-rates.service';
import { GroupTypeService } from '../auth/API/group-type.service';
import { LocationsService } from '../auth/API/locations.service';
import { MaterialSheetService } from '../auth/API/material-sheet.service';
import { MeassurmentUnitsService } from '../auth/API/meassurment-units.service';
import { OrganizationalUnitsService } from '../auth/API/organizational-units.service';
import { PerformanceService } from '../auth/API/performance.service';
import { PriceTypeService } from '../auth/API/price-type.service';
import { SessionService } from '../auth/API/session.service';
import { ShippingMethodService } from '../auth/API/shipping-method.service';
import { TaxService } from '../auth/API/tax.service';
import { TechnologicalProcessesService } from '../auth/API/technological-processes.service';
import { TechnologicalUnitsService } from '../auth/API/technological-units.service';
import { TrafficTypeService } from '../auth/API/traffic-type.service';
import { TraitorService } from '../auth/API/traitor.service';
import { UnitAboveStorageService } from '../auth/API/unit-above-storage.service';
import { UpnCodesService } from '../auth/API/upn-codes.service';
import { UserService } from '../auth/API/user.service';
import { WarehouseSlipService } from '../auth/API/warehouse-slip.service';
import { WarehouseService } from '../auth/API/warehouse.service';
import { WorkCenterClassificationService } from '../auth/API/work-center-classification.service';
import { WorkOrderService } from '../auth/API/work-order.service';
import { WorkProceduresService } from '../auth/API/work-procedures.service';
import { WorkSheetService } from '../auth/API/work-sheet.service';
import { AlternativeChipers } from '../auth/Classes/alternative-chipers';
import { AlternativeChipersMarketing } from '../auth/Classes/alternative-chipers-marketing';
import { Areas } from '../auth/Classes/areas';
import { ArticleType } from '../auth/Classes/article-type';
import { BackToProduction } from '../auth/Classes/back-to-production';
import { BackToProductionItem } from '../auth/Classes/back-to-production-item';
import { Characteristics } from '../auth/Classes/characteristics';
import { Classification } from '../auth/Classes/classification';
import { ClassificationWorkProceduress } from '../auth/Classes/classification-work-proceduress';
import { CommercialStates } from '../auth/Classes/commercial-states';
import { CostCenters } from '../auth/Classes/cost-centers';
import { Country } from '../auth/Classes/country';
import { Currencie } from '../auth/Classes/currencie';
import { CustomTariffs } from '../auth/Classes/custom-tariffs';
import { ExchangeRates } from '../auth/Classes/exchange-rates';
import { GroupType } from '../auth/Classes/group-type';
import { Language } from '../auth/Classes/language';
import { Locations } from '../auth/Classes/locations';
import { MaterialSheet } from '../auth/Classes/material-sheet';
import { MaterialSheetItem } from '../auth/Classes/material-sheet-item';
import { MeassurmentUnits } from '../auth/Classes/meassurment-units';
import { OrganizationalUnits } from '../auth/Classes/organizational-units';
import { PerformanceWork } from '../auth/Classes/performance-work';
import { PriceType } from '../auth/Classes/price-type';
import { ShippingMethod } from '../auth/Classes/shipping-method';
import { Tax } from '../auth/Classes/tax';
import { TechnologicalProcesses } from '../auth/Classes/technological-processes';
import { TechnologicalUnits } from '../auth/Classes/technological-units';
import { TrafficType } from '../auth/Classes/traffic-type';
import { Traitor } from '../auth/Classes/traitor';
import { TraitorItem } from '../auth/Classes/traitor-item';
import { UnitAboveStorage } from '../auth/Classes/unit-above-storage';
import { UpnCodes } from '../auth/Classes/upn-codes';
import { User } from '../auth/Classes/user';
import { UserTheme } from '../auth/Classes/user-theme';
import { Warehouse } from '../auth/Classes/warehouse';
import { WarehouseFabricSaved } from '../auth/Classes/warehouse-fabric-saved';
import { WarehouseSlip } from '../auth/Classes/warehouse-slip';
import { WarehouseSlipSaved } from '../auth/Classes/warehouse-slip-saved';
import { WorkCenterClassification } from '../auth/Classes/work-center-classification';
import { WorkOrder } from '../auth/Classes/work-order';
import { WorkProcedures } from '../auth/Classes/work-procedures';
import { WorkSheet } from '../auth/Classes/work-sheet';
import { WorkSheetItem } from '../auth/Classes/work-sheet-item';
import { ZipCode } from '../auth/Classes/zip-code';
import { CodersSearchPipe } from '../auth/Pipes/coders-search.pipe';
import { UserSearchPipe } from '../auth/Pipes/user-search.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/notification/notification.component';
import { FirebaseService } from '../auth/API/firebase.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SearchGroupPipe } from '../auth/Pipes/search-group.pipe';
import { ArticleTypeSearchPipe } from '../auth/Pipes/article-type-search.pipe';
import { MuSearchPipe } from '../auth/Pipes/mu-search.pipe';
import { SearchTaxPipe } from '../auth/Pipes/search-tax.pipe';
import { SearchCustomTariffsPipe } from '../auth/Pipes/search-custom-tariffs.pipe';
import { SearchWorkCentersPipe } from '../auth/Pipes/search-work-centers.pipe';
import { SearchLanguagesPipe } from '../auth/Pipes/search-languages.pipe';
import { DeliveryConditions } from '../auth/Classes/delivery-conditions';
import { ControlPlan } from '../auth/Classes/control-plan';
import { DeliveryConditionsService } from '../auth/API/delivery-conditions.service';
import { PaymentTerms } from '../auth/Classes/payment-terms';
import { PaymentTermsService } from '../auth/API/payment-terms.service';
import { SearchPaymentTermPipe } from '../auth/Pipes/search-payment-term.pipe';
import { SearchZipCodePipe } from '../auth/Pipes/search-zip-code.pipe';
import { Sector } from '../auth/Classes/sector';
import { SectorService } from '../auth/API/sector.service';
import { SearchSectorPipe } from '../auth/Pipes/search-sector.pipe';
import { Unit } from '../auth/Classes/unit';
import { SearchShippingMethodPipe } from '../auth/Pipes/search-shipping-method.pipe';
import { SearchCurrenciePipe } from '../auth/Pipes/search-currencie.pipe';
import { SearchCountryPipe } from '../auth/Pipes/search-country.pipe';
import { SearchPriceTypePipe } from '../auth/Pipes/search-price-type.pipe';
import { SearchTrafficTypePipe } from '../auth/Pipes/search-traffic-type.pipe';
import { SearchExchangeRatesPipe } from '../auth/Pipes/search-exchange-rates.pipe';
import { DebitNotes } from '../auth/Classes/debit-notes';
import { DebitNotesService } from '../auth/API/debit-notes.service';
import { SearchDebitNotesPipe } from '../auth/Pipes/search-debit-notes.pipe';
import { Credits } from '../auth/Classes/credits';
import { CreditsService } from '../auth/API/credits.service';
import { SearchCreditsPipe } from '../auth/Pipes/search-credits.pipe';
import { Invoices } from '../auth/Classes/invoices';
import { InvoicesService } from '../auth/API/invoices.service';
import { SearchInvoicesPipe } from '../auth/Pipes/search-invoices.pipe';
import { RateSheet } from '../auth/Classes/rate-sheet';
import { RatesheetService } from '../auth/API/ratesheet.service';
import { SearchRateSheetsPipe } from '../auth/Pipes/search-rate-sheets.pipe';
import { SupplierOrders } from '../auth/Classes/supplier-orders';
import { SupplierOrdersService } from '../auth/API/supplier-orders.service';
import { SearchSupplierOrderPipe } from '../auth/Pipes/search-supplier-order.pipe';
import { CustomerOrder } from '../auth/Classes/customer-order';
import { CustomerOrderService } from '../auth/API/customer-order.service';
import { SearchCustomerOrderPipe } from '../auth/Pipes/search-customer-order.pipe';
import { Estimates } from '../auth/Classes/estimates';
import { EstimatesService } from '../auth/API/estimates.service';
import { SearchEstimatesPipe } from '../auth/Pipes/search-estimates.pipe';
import { ComplaintsService } from '../auth/API/complaints.service';
import { SearchComplaintsPipe } from '../auth/Pipes/search-complaints.pipe';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  providers: [
    User,
    ArticleType,
    Tax,
    Country,
    CustomTariffs,
    MeassurmentUnits,
    PerformanceWork,
    ZipCode,
    Warehouse,
    GroupType,
    ShippingMethod,
    UserService,
    BankService,
    ArticleTypeService,
    CustomTariffsService,
    GroupTypeService,
    PerformanceService,
    MeassurmentUnitsService,
    TaxService,
    WorkOrderService,
    WarehouseService,
    ShippingMethodService,
    ExchangeRatesService,
    ExchangeRates,
    PriceType,
    PriceTypeService,
    Currencie,
    CurrencieService,
    TrafficType,
    TrafficTypeService,
    CommercialStates,
    CommercialStatesService,
    WorkCenterClassificationService,
    WorkCenterClassification,
    UnitAboveStorage,
    UnitAboveStorageService,
    Language,
    Locations,
    LocationsService,
    Areas,
    OrganizationalUnits,
    OrganizationalUnitsService,
    CostCenters,
    CostCentersService,
    UpnCodes,
    UpnCodesService,
    WorkProcedures,
    WorkProceduresService,
    Classification,
    ClassificationService,
    AlternativeChipers,
    AlternativeChipersService,
    DCACFormService,
    AlternativeChipersMarketing,
    WorkOrderService,
    WorkOrder,
    WarehouseSlip,
    WarehouseSlipService,
    Traitor,
    TraitorService,
    Characteristics,
    CharacteristicsService,
    TechnologicalProcesses,
    TechnologicalProcessesService,
    ClassificationWorkProceduress,
    ClassificationWorkProceduressService,
    TechnologicalUnits,
    TechnologicalUnitsService,
    TraitorItem,
    WarehouseFabricSaved,
    WarehouseSlipSaved,
    WorkSheet,
    WorkSheetItem,
    WorkSheetService,
    MaterialSheet,
    MaterialSheetItem,
    MaterialSheetService,
    BackToProduction,
    BackToProductionItem,
    BackToProductionService,
    SessionService,
    ConnectionService,
    CodersSearchPipe,
    UserSearchPipe,
    UserTheme,
    FirebaseService,
    SearchGroupPipe,
    ArticleTypeSearchPipe,
    MuSearchPipe,
    SearchTaxPipe,
    SearchLanguagesPipe,
    DeliveryConditions,
    ControlPlan,
    DeliveryConditionsService,
    PaymentTerms,
    PaymentTermsService,
    SearchPaymentTermPipe,
    SearchZipCodePipe,
    Sector,
    SectorService,
    SearchSectorPipe,
    Unit,
    SearchShippingMethodPipe,
    SearchCurrenciePipe,
    SearchCountryPipe,
    SearchPriceTypePipe,
    SearchTrafficTypePipe,
    SearchExchangeRatesPipe,
    DebitNotes,
    DebitNotesService,
    SearchDebitNotesPipe,
    Credits,
    CreditsService,
    SearchCreditsPipe,
    Invoices,
    InvoicesService,
    SearchInvoicesPipe,
    RateSheet,
    RatesheetService,
    SearchRateSheetsPipe,
    SupplierOrders,
    SupplierOrdersService,
    SearchSupplierOrderPipe,
    CustomerOrder,
    CustomerOrderService,
    SearchCustomerOrderPipe,
    Estimates,
    EstimatesService,
    SearchEstimatesPipe,
    ComplaintsService,
    SearchComplaintsPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hypetix';
  public systemMessage: string = '';

  constructor(
    private firebaseService: FirebaseService,
  ){}

  ngOnInit(): void {
    const auth = this.firebaseService.getAuth();
    const firestore = this.firebaseService.getFirestore();

  }

}
