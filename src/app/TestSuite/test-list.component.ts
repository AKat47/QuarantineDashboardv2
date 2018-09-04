import {Component,OnInit} from '@angular/core';
import { ITest } from "./test";
import { TestService } from "./test.service";
import 'rxjs/add/operator/filter'


@Component({
  selector: 'pm-testlist',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent{
    errorMessage: any;
    title = 'Test List';
    _listFilter:string ;
    testlist : ITest[] =[];
    _application : "RC";
    _risk ="High" ;
    _status :"Stable";
    application: string[] = [
        "RC",
        "Matisse"
    ];

    risk: string[] = [
        "High",
        "Medium",
        "Low"
    ];

    status: string[] = [
        "Stable",
        "Quarantine"
    ];

    pageNumber: number = 1;
    numberPerPage: number = 10;
    numberOfPages: number;
    _nubmerOfPages: number[];
  
  ngOnInit() :void
  {
    //   this._testService.getTests()
    //     .subscribe(testlist => {
    //         this.testlist = testlist;
    //         this.filteredList = this.testlist
    //     },
    //     error => this.errorMessage = <any> error);
      
        

    //   console.log(" The filtered lisgt is ");
    //   console.log(this.filteredList);
    this._filteredList = this._getFakeData();
    this.numberOfPages = this.getPageNumber(this.numberPerPage,this._filteredList);
  }

  get listFilter(): string{
      return this._listFilter;
  }

  set listFilter(value:string)
  {
      this._listFilter = value;
      this.filteredList = this.testlist;
      this.filteredList =  this._listFilter ? this.performFilter(this._listFilter) : this.testlist;
  }

  performFilter(filterBy: string): ITest[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.testlist.filter((test: ITest) => test.TestName.toLocaleLowerCase().indexOf(filterBy)!== -1)
      .filter((response:ITest) => response.Risk == "High");
  }

  constructor(private _testService : TestService) {      
      this.listFilter = "RC";
  }

onApplicationChange(newValue)
{
    this._application = newValue;
    this.performcategoryfilter();
}

onRiskChange(newValue)
{
    this._risk = newValue;
    this.performcategoryfilter(); 
}

onStatusChange(newValue)
{
    this._status = newValue;
    this.performcategoryfilter();
}

performcategoryfilter() : void
{
    this.filteredList = this.testlist;
    if(this.status)
        this.filteredList = this.filteredList.filter((response:ITest) => response.Status == this._status);   
    if(this._application)
        this.filteredList = this.filteredList.filter((response:ITest) => response.Application == this._application);
    if(this._risk)
        this.filteredList = this.filteredList.filter((response:ITest) => response.Risk == this._risk);      
}

  private _filteredList: ITest[];

    public get filteredList(): ITest[] {
        return this._filteredList;
    }
    public set filteredList(value: ITest[]) {
        this._filteredList = value;
    }

 
    private _getFakeData(): ITest[]{
        let tests: ITest[] = [];

        for(let i =0; i < 40; i++){
            let testName = 'testName' + i;
            let application = 'application' + i;
            let risk = 'risk' + i;
            let feature = 'feature' + i;
            let status = 'status' + i;

            let fakeTest: ITest = {TestName: testName, Application: application, Risk: risk, Feature: feature, Status: status};
            tests.push(fakeTest);
        }

        return tests;
    }

    private getPageNumber(nubmerPerPage: number, source: ITest[]) {
        let numberOfPages = Math.floor(source.length / nubmerPerPage);
        this._nubmerOfPages = [];
        for(let i = 1; i <= numberOfPages; i++){
            this._nubmerOfPages.push(i);
        }
        return numberOfPages;
    }

    getResource(){
        let start = (this.pageNumber - 1) * this.numberPerPage;
        let end = start + this.numberPerPage;

        return this._filteredList.slice(start, end);
    }

    setPageNumber(pageNumber: number){
        this.pageNumber = pageNumber;
    }
}

class FilteredList {
    tests: ITest[];
}

// class Test {
//     TestName: string;
//     Application: string;
//     Risk: string;
//     Feature: string;
//     Status: string;
// }

