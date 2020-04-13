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
          {title: 'Name', data: 'name'},
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}