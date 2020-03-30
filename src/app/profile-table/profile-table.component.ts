import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Profile} from '../profile';
import {ProfileService} from './profile.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component(
  {
    selector: 'profile-table', 
    templateUrl: './profile-table.component.html', 
    providers: [ProfileService, DecimalPipe],
    styleUrls: ['./profile-table.component.css']
  }
)

export class ProfileTable {
  profiles$: Observable<Profile[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProfileService) {
    this.profiles$ = service.profiles$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}