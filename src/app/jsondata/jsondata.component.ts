import {Component, OnInit, ViewChild} from '@angular/core';
import {DatasourceService} from '../datasource.service';

declare var $;

@Component({
  selector: 'app-json-data',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.scss']
})
export class JsondataComponent implements OnInit {

  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', {static: true}) table;

  constructor(private dataService: DatasourceService) { }

  ngOnInit() {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getData().subscribe(data => {
      this.tableData = data.data;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Email', data: 'email'},
          {title: 'First Name', data: 'first_name'},
          {title: 'Last Name', data: 'last_name'},
          {title: 'Avatar', data: 'avatar'},
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}