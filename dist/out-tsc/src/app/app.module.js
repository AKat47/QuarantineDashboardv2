"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var test_list_component_1 = require("./TestSuite/test-list.component");
var test_service_1 = require("./TestSuite/test.service");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var radio_1 = require("@angular/material/radio");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                test_list_component_1.TestListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatIconModule,
                radio_1.MatRadioModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatTooltipModule,
                material_1.MatToolbarModule,
                material_1.MatSelectModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [test_service_1.TestService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map