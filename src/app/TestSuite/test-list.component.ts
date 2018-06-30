import {Component,OnInit} from '@angular/core';
import { ITest } from "./test";
import { TestService } from "./test.service";


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
  
  ngOnInit() :void
  {
      this._listFilter = "";
        this._testService.getTests()
        .subscribe(testlist => {this.testlist = testlist},error => this.errorMessage = <any> error);
      this.filteredList = this.testlist;
  }

  get listFilter(): string{
      return this._listFilter;
  }

  set listFilter(value:string)
  {
      this._listFilter = value;
      this.filteredList = this.testlist;
      //this.filteredList =  this._listFilter ? this.performFilter(this._listFilter) : this.testlist;
  }

  performFilter(filterBy: string): ITest[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.testlist.filter((test: ITest) =>
            test.TestName.toLocaleLowerCase().indexOf(filterBy)!== -1);
  }

  constructor(private _testService : TestService) {      
      this.listFilter = "";
  }



  filteredList: ITest[];

 
}