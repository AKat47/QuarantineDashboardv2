import {Component,OnInit} from '@angular/core';
import { ITest } from "./test";
import { TestService } from "./test.service";
import { PagerService } from "./pager.Service";
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
    pager: any = {};
    pagedItems: any[];
    application: string[] = [
        "RewardCentre",
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
        this._testService.getTests()
        .subscribe(testlist => {
             this.testlist = testlist;
             this._filteredList = this.testlist;
             this.numberOfPages = this.getPageNumber(this.numberPerPage,this._filteredList);
             this.setPage(1);
         },
         error => this.errorMessage = <any> error);   
  }

  
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this._filteredList.length, page);

    // get current page of items
    this.pagedItems = this._filteredList.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

 reset()
 {
    this.numberOfPages = this.getPageNumber(this.numberPerPage,this._filteredList);
    this.setPage(1);
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

  constructor(private _testService : TestService, private pagerService: PagerService ) {      
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
    this._filteredList = this.filteredList;
    this.reset();
}

  private _filteredList: ITest[];

    public get filteredList(): ITest[] {
        return this._filteredList;
    }
    public set filteredList(value: ITest[]) {
        this._filteredList = value;
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
