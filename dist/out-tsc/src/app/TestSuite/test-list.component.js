"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_service_1 = require("./test.service");
require("rxjs/add/operator/filter");
var TestListComponent = /** @class */ (function () {
    function TestListComponent(_testService) {
        this._testService = _testService;
        this.title = 'Test List';
        this.testlist = [];
        this._risk = "High";
        this.application = [
            "RC",
            "Matisse"
        ];
        this.risk = [
            "High",
            "Medium",
            "Low"
        ];
        this.status = [
            "Stable",
            "Quarantine"
        ];
        this.pageNumber = 1;
        this.numberPerPage = 10;
        this.listFilter = "RC";
    }
    TestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._testService.getTests()
            .subscribe(function (testlist) {
            _this.testlist = testlist;
            _this._filteredList = _this.testlist;
        }, function (error) { return _this.errorMessage = error; });
        this.numberOfPages = this.getPageNumber(this.numberPerPage, this._filteredList);
        console.log("The number of pages is" + this._filteredList);
    };
    Object.defineProperty(TestListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredList = this.testlist;
            this.filteredList = this._listFilter ? this.performFilter(this._listFilter) : this.testlist;
        },
        enumerable: true,
        configurable: true
    });
    TestListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.testlist.filter(function (test) { return test.TestName.toLocaleLowerCase().indexOf(filterBy) !== -1; })
            .filter(function (response) { return response.Risk == "High"; });
    };
    TestListComponent.prototype.onApplicationChange = function (newValue) {
        this._application = newValue;
        this.performcategoryfilter();
    };
    TestListComponent.prototype.onRiskChange = function (newValue) {
        this._risk = newValue;
        this.performcategoryfilter();
    };
    TestListComponent.prototype.onStatusChange = function (newValue) {
        this._status = newValue;
        this.performcategoryfilter();
    };
    TestListComponent.prototype.performcategoryfilter = function () {
        var _this = this;
        this.filteredList = this.testlist;
        if (this.status)
            this.filteredList = this.filteredList.filter(function (response) { return response.Status == _this._status; });
        if (this._application)
            this.filteredList = this.filteredList.filter(function (response) { return response.Application == _this._application; });
        if (this._risk)
            this.filteredList = this.filteredList.filter(function (response) { return response.Risk == _this._risk; });
    };
    Object.defineProperty(TestListComponent.prototype, "filteredList", {
        get: function () {
            return this._filteredList;
        },
        set: function (value) {
            this._filteredList = value;
        },
        enumerable: true,
        configurable: true
    });
    TestListComponent.prototype._getFakeData = function () {
        var tests = [];
        for (var i = 0; i < 40; i++) {
            var testName = 'testName' + i;
            var application = 'application' + i;
            var risk = 'risk' + i;
            var feature = 'feature' + i;
            var status_1 = 'status' + i;
            var fakeTest = { TestName: testName, Application: application, Risk: risk, Feature: feature, Status: status_1 };
            tests.push(fakeTest);
        }
        return tests;
    };
    TestListComponent.prototype.getPageNumber = function (nubmerPerPage, source) {
        var numberOfPages = Math.floor(source.length / nubmerPerPage);
        this._nubmerOfPages = [];
        for (var i = 1; i <= numberOfPages; i++) {
            this._nubmerOfPages.push(i);
        }
        return numberOfPages;
    };
    TestListComponent.prototype.getResource = function () {
        var start = (this.pageNumber - 1) * this.numberPerPage;
        var end = start + this.numberPerPage;
        return this._filteredList.slice(start, end);
    };
    TestListComponent.prototype.setPageNumber = function (pageNumber) {
        this.pageNumber = pageNumber;
    };
    TestListComponent = __decorate([
        core_1.Component({
            selector: 'pm-testlist',
            templateUrl: './test-list.component.html',
            styleUrls: ['./test-list.component.css']
        }),
        __metadata("design:paramtypes", [test_service_1.TestService])
    ], TestListComponent);
    return TestListComponent;
}());
exports.TestListComponent = TestListComponent;
var FilteredList = /** @class */ (function () {
    function FilteredList() {
    }
    return FilteredList;
}());
//# sourceMappingURL=test-list.component.js.map